var mysql = require('mysql');
var express = require('express');
var app = express();


//searches for an email based on name in google_accounts
function searchForEmails(name) {
    var ajax = new XMLHttpRequest();
    var func = "GET";
    var url = "search.php";
    var asynch = true;

    ajax.open(func, url, asynch);

    ajax.send();

    
}
