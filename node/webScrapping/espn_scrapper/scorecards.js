let request = require("request");
let cheerio = require("cheerio");

function getInfoFromScorecard(url) {
    // console.log("from scorecards.js", url);
    // we have a url of a scorecard, we want to get html of that scorecard

    request(url, cb);
}
 // visit every scorecard and get info

 function cb(err, res, body) {
    if(err) {
        console.log(err);
    }
    else {
        getMatchDetails(body);       
    }
 }
 function getMatchDetails(html) {
    // selecTool contains html of ith scorecard
    let selecTool = cheerio.load(html);
    //1. get venue
    let desc = selecTool(".") 
}



module.exports = {
    gifs:getInfoFromScorecard
}