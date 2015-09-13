function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
	return submittedUsers.every(function(item) { 
		return goodUsers.map(function(item) {return item.id;}).indexOf(item.id) > -1;
	 });
      };
    }

    module.exports = checkUsersValid

