var mysql = require('mysql');
var express = require('express');
var app = express();


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

class AuctionGroup {
    #title;
    #date_created;
    #num_of_members;
    #members;
    #owner;
    #blockedUsers;
    #currentItem;
    #bid_list;


    constructor(name, account) {
        title = name;
        date_created = new Date().toISOString().slice(0,10);
        this.#num_of_members = 0;
        members = [];
        owner = account;
        this.#blockedUsers = [];
        currentItem = "";
        bid_list = []
    }

    search_for_users() {
        searchForEmails();
    }

    add_to_group(acct) {
        members.push(acct);
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
    }

    reinstate(name) {
        
    }
};











