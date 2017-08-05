// NPM Packages Required
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Configuration
var app = express();

// Port set-up used for our listener
var PORT = process.env.PORT || 3500;

// bodyParser standards
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
