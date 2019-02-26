var path = require("path");
var tableData = require("../data/tableData");


module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(tableData);
    });
  
   
  
    app.post('/api/friends', function(req, res){
      var bestMatch = {
          name: "",
          photo: "",
          friendDifference: 1000
      };

      var userData = req.body;
      var userName = userData.name;
      var userPhoto = userData.photo;
      var userScores = userData.scores;

      var totalDifference = 0;

      for (var i=0; i< tableData.length; i++) {

          console.log(tableData[i].name);
          totalDifference = 0;

          for (var j=0; j<tableData[i].scores[j]; j++){

              totalDifference += Math.abs(parseInt(userScores[j] - tableData[i].scores[j]));
          }

          if (totalDifference <= bestMatch.friendDifference){

              bestMatch.name = tableData[i].name;
              bestMatch.photo = tableData[i].photo;
              bestMatch.friendDifference = totalDifference;
          }
      }

      tableData.push(userData)

      res.json(bestMatch);
});
  };
  