const request = require("request");
const cheerio = require("cheerio");
// request("https://www.worldometers.info/coronavirus/", cb);

// function cb(err, res, body) {
//     console.log("error", err);
//     // console.log(res);
//     console.log(body);
//     //extract krle data html se
// }


let html = `<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>`;


let selecTool = cheerio.load(html);
let fruitNameArr = selecTool('#fruits');
console.log(fruitNameArr.text());