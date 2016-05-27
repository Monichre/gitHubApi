var GitHub = require('../js/github.js').GitHub;




$(document).ready(function() {
  $('#submitUser').click(function() {
    var userName = $('#gitHubName').val();
    var user = new GitHub(userName);
    $('.name').text(userName);
    user.getRepos();
    console.log(user);

    

    setTimeout(function displayUser(){
    	
    	for(i = 0; i <= 10; i ++){
    		console.log(user.repos[i]);
			$('#repoName' + i).text(user.repos[i].name);
			$('#description' + i).text(user.repos[i].description);
	    	}

	}, 1000);
  
  });
});
