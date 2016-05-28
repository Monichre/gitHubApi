var GitHub = require('../js/github.js').GitHub;




$(document).ready(function() {
  $('#submitUser').click(function() {
  	$('.photo img').remove();
    var userName = $('#gitHubName').val();
    var user = new GitHub(userName);
    $('.name').text(userName);
    user.getRepos();
    
    user.getUser();
    console.log(user);

    

    setTimeout(function displayUser(){

    	$('.photo').append("<img src =" + user.userObject.avatar_url + ">");
    	for(i = 0; i <= 10; i ++){
    		console.log(user.repos[i]);
			$('#repoName' + i).text(user.repos[i].name);
			$('#description' + i).text(user.repos[i].downloads_url);
	    	}

	}, 1000);
  
  });
});

var apiKey = require('./../.env').apiKey;

GitHub = function(userName){
	this.userName = userName;
	this.repos = [];
	this.userObject = [];
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

GitHub.prototype.getUser = function(){
	var self = this;
 $.get('https://api.github.com/users/'+ this.userName + '?access_token=' + apiKey).then(function(response){
  	self.userObject = response;
  	// console.log(self.repos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};


exports.GitHub = GitHub;
