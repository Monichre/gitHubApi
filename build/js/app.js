(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "8cdc7cd99536ee525906eabc69d621a859806cad";
},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

GitHub = function(userName){
	this.userName = userName;
	this.repos = [];
}

GitHub.prototype.getRepos = function(){
	var self = this;
 $.get('https://api.github.com/users/'+ this.userName + '/repos?access_token=' + apiKey).then(function(response){
  	self.repos = response;
  	// console.log(self.repos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};


exports.GitHub = GitHub;

},{"./../.env":1}],3:[function(require,module,exports){
var GitHub = require('../js/github.js').GitHub;



$(document).ready(function() {
  $('#submitUser').click(function() {
    var userName = $('#gitHubName').val();
    var user = new GitHub(userName);
    $('.name').text(userName);
    user.getRepos();
    console.log(user);
    
  
    
  });
});

var apiKey = require('./../.env').apiKey;

GitHub = function(userName){
	this.userName = userName;
	this.repos = [];
}

GitHub.prototype.getRepos = function(){
	var self = this;
 $.get('https://api.github.com/users/'+ this.userName + '/repos?access_token=' + apiKey).then(function(response){
  	self.repos = response;
  	// console.log(self.repos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};


exports.GitHub = GitHub;

},{"../js/github.js":2,"./../.env":1}]},{},[3]);
