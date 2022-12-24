//cheerio
//Cheerio parses HTML and it traverses the html so that data can be manipulated according to the user's needs.
const cheerio = require("cheerio");
let html = `<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`;

let selecTool = cheerio.load(html); 
let fruitName = selecTool(".fruits");
console.log(fruitName.text());
console.log(fruitName.html()); 
let fruitsName= selecTool("#fruits");
console.log(fruitsName.text()); 