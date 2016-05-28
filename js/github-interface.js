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
