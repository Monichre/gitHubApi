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
