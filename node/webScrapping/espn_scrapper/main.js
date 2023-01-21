let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio"); // cheerio helps in website scrapping by getting the data.

request(url, cb);

function cb(err, res, body) {
    if(err) {
        console.log("error", err);
    }
    else {
        handleHtml(body);   //function call
    }
}
//function Definition
function handleHtml(html) {
    let selecTool =  cheerio.load(html);
    let anchorElem = selecTool('a[class="ds-text-tight-m ds-font-bold ds-text-ui-typo-primary hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block ds-block ds-text-center"]'); 
    console.log(anchorElem);
    // attr methods --> Method for getting all attributes and values
    let relativeLink = anchorElem.attr("href");
    console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    console.log(fullLink);
   
}

    