var data = require("../data.json");

exports.addFriend = function(req, res) { 

	console.log("add Friend called");

  //Get parameter values
  var name = req.query.name;
  var description = req.query.description;

  console.log(name);
  console.log(description);

  //Creating a new friend object
  var newFriend = {
    name: name,
    description: description,
    imageURL: "http://lorempixel.com/400/400/people"
  }

  //Add to friends array
  data.friends.push(newFriend);

  //Take you back to index route
  res.redirect('/');
 }
