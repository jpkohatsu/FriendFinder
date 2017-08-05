var friends = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		var currentUser = req.body;
		var differences = [];

		if (friendData.length > 1) {
			friendData.forEach(function(user) {
				var totalDifference = 0;
				for (var i = 0; i < currentUser.length; i++) {
					var otherAnswer = user.answers[i];
					var thisAnswer = currentUser.answers[i];
					var difference = +otherAnswer - +thisAnswer;
					totalDifference += Math.abs(difference);
				}
				differences.push(totalDifference);
			});

			var minDifference = Math.min.apply(null, differences);
			var bestMatch = [];
			for (var i = 0; i < differences.length; i++) {
				if (differences[i] === minDifference) {
					bestMatch.push(friendData[i]);
				}
			}
			res.json(bestMatch);	
		} else {
			res.json(friendData);
		}
		friendData.push(currentUser);
	});
};