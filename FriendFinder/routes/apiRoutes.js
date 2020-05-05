var tableData = require("../data/tableData");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(tableData);
    });
  
   
  
    app.post('/api/friends', function(req, res){
        // console.log(req.body)
      var bestMatch = {
          name: "",
          photo: "",
          friendDifference: 40
      };

      var userData = req.body;
      var userScores = req.body.scores;
        // console.log(userScores)
    //   var totalDifference = 0;

      for (var i = 0; i < tableData.length; i++) {
         console.log(tableData[i].scores);
        
         var totalDifference = 0;

          for (var j = 0; j < tableData[i].scores.length; j++){
            var difference = Math.abs(parseInt(userScores[j] - tableData[i].scores[j]));
            totalDifference += difference;
          }

          if (totalDifference < bestMatch.friendDifference){
              bestMatch.name = tableData[i].name;
              bestMatch.photo = tableData[i].photo;
              bestMatch.friendDifference = totalDifference;
          }
      }

      tableData.push(userData)

      res.json(bestMatch);
});
};


  