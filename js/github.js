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
