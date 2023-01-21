const request = require("request");
const cheerio = require("cheerio"); // cheerio helps in website scrapping by getting the data.
//const getScorecardObj = require("./scorecards");
const {gifs} = require("./scorecards");

function getAllMatch(url) {
    //console.log("from allMatch.js", url);
    request(url, cb);
}
function cb(err, res, body) {
    if(err) {
        console.log("error", err);
    }
    else {
        extractAllMatchLink(body);   //function call
    }
}

function extractAllMatchLink(html) {
    let selecTool =  cheerio.load(html);
    let scorecardElemArr = selecTool('a[class="ds-text-tight-m ds-font-bold ds-text-ui-typo-primary hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block ds-block ds-text-center"]'); 
    console.log(scorecardElemArr);
    // attr methods --> Method for getting all attributes and values
    for(let i = 0; i < scorecardElemArr; i++) {
        let scorecardLink = selecTool(scorecardElemArr[i]).attr("href");
        //console.log(i + 1 + ") " + scorecardLink);
        let fullLink = "https://www.espncricinfo.com" + scorecardLink;
        //getScorecardObj.gifs(fullLink);
        gifs(fullLink);
    }
}

module.exports= {
    getAllMatch: getAllMatch
}


