var mysql = require('mysql');
var express = require('express');
var app = express();

include('search_users.js');


//searches for an email based on name in google_accounts
function searchForEmails() {
    var ajax = new XMLHttpRequest();
    var func = "GET";
    var url = "search.php";
    var asynch = true;

    ajax.open(func, url, asynch);

    ajax.send();

    ajax.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText);
            return data;
        }
    }
}

var global_auctions = [];

class AuctionGroup {
    #title;
    #date_created;
    #num_of_members;
    #members;
    #owner;
    #blockedUsers;
    #currentItem;
    #bid_list;
    #auctioneer;
    #timeAllowed;


    constructor(name, account) {
        title = name;
        date_created = new Date().toISOString().slice(0,10);
        this.#num_of_members = 0;
        members = [];
        owner = account;
        this.#blockedUsers = [];
        currentItem = "";
        bid_list = [];
        this.#auctioneer;
        this.#timeAllowed = 10;
    }

    getTitle() {
        return title;
    }

    getMembers() {
        members = getNames(title);
        return members;
    }

    setAuctioneer(name) {
        this.#auctioneer = name;
    }

    getItem(curr_item) {
        currentItem = curr_item;
    }

    search_for_users() {
        searchForEmails();
    }

    add_to_group(acct) {
        members.push(acct);
        insert(title, acct.getName());
    }

    increaseTimeAllowed(factor) {
        this.#timeAllowed *= factor;
    }
    
    getTime() {
        return this.#timeAllowed;
    }

    getOwner() {
        return owner;
    }

    blockUser(name) {
        for (var i = 0; i < members.length; i++) {
            if (name == members[i]) {
                members.splice(members.indexOf(name), 1);
                this.#blockedUsers.push(name);
                break;
            } 
        }
    }

    removeUser(name) {
        members.splice(members.indexOf(name), 1);
        remove(title, name);
    }

    reinstate(name) {
        this.#blockedUsers.splice(this.#blockedUsers.indexOf(name),1);
        members.splice(name);
    }
};











