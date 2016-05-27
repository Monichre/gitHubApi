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
