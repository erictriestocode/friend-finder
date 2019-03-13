// Server File
//**************************

// NODE MODULE for Express
const express = require("express");
const app = express();

// IMPORTS
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRouts = require("./app/routing/apiRoutes");

// PORT
var PORT = process.env.PORT || 8080;

// Data Parsing for Express(exercise 13.3 16 - hot restaurant)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTES
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function(){
    console.log("Server is listening on: " + PORT);
});