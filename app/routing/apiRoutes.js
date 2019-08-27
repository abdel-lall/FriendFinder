var freinds = require("../data/friends");


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(freinds);
  });


  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend)
    
    var diffrence= 50;
    for(i=0;i<freinds.length;i++){
      var totalDiffrence =0 ;
      for(j=0;j<freinds[i].scores.length;j++){
       var diff = Math.abs(newFriend.scores[j] - freinds[i].scores[j]) ;
       totalDiffrence = totalDiffrence + diff;
      }
      console.log(totalDiffrence)
      if(diffrence> totalDiffrence){
        diffrence = totalDiffrence;
        var match = freinds[i]
      }
    }
    console.log(match);
    res.json(match);
    freinds.push(newFriend);
  });
}
