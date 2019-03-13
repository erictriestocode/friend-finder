var path = require("path");

// EXPORTED ROUTES
module.exports = function(app){
    // Default route to homepage
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    // Route to survey
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}

