// API Routes
const userData = require("../data/friends");
const path = require("path");

// EXPORTED API ROUTES
module.exports = function(app){
    // Display JSON of all people in Friends
    app.get("/api/friends", function(req,res){
        res.json(userData)
    });


}