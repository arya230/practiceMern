const { default: puppeteer } = require("puppeteer");    
const pupeeteer = require("puppeteer");
let { answer } = require("./codes");
let { email, password } = require('./secrets');

let curTab;
//every promise gives an object
//every puppeteer methods gives promises
let browserOpenPromise = puppeteer.launch({
    headless: false,//browser should be and the work can be seen
    defaultViewport:null,// first page of the tab is called default viewport    
    args:["--start-maximized"],
    //chrome://version
    // C:\Program Files\Google\Chrome\Application\chrome.exe
    // executablePath: "/path/to/chrome",
});
//browser will be given by pupeeteer.launch
browserOpenPromise //fulfill
.then(function(browser) {
    console.log("browser is open");
    //console.log(browser); 
    //returns an array of all open pages inside the Browser contexts.
    let allTabsPromise = browser.pages();//it brings information of all the tabs in the browser
    return allTabsPromise;
})

// allTabsPromise.then() another reason why return is used
.then(function(allTabsArr) {

    curTab =  allTabsArr[0];
    console.log("new tab");
    //URL to navigate page to
    let visitingLoginPagePromise = curTab.goto("https://www.hackerrank.com/auth/login");
    return visitingLoginPagePromise;

})
.then(function() {
    console.log();
    console.log("Hackerrank login page opened");
    let emailWillBeTypedPromise = curTab.type("input[name='username']", email, {delay:100});
    return emailWillBeTypedPromise;
})
.then(function () {
    console.log("email is typed");                 //selector (where to type) , data(what to type)
    let passwordWillBeTypedPromise = curTab.type("input[type='password']", password);
    return passwordWillBeTypedPromise;
})
.then(function () {
    console.log("password has been typed");
    let willBeLoggedInPromise = curTab.click(".ui-btn.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return willBeLoggedInPromise;
})
.then( function() {
    console.log("logged into hackerrank successfully");
    let algorithmTabWillBeOpenedPromise = waitAndClick("div[data-automation='algorithms']");
    return algorithmTabWillBeOpenedPromise;
})
.then(function () {
    console.log("algorithm page is opened");
    let allQuesPromise = curTab.waitForSelector('a[data-analytics="ChallengeListChallengeName"]');
    return allQuesPromise;
})

.then(function () {
    function getAllQuesLinks() {
        let allElemArr = document.querySelectorAll('a[data-analytics="ChallengeListChallengeName"]');
        let linksArr = [];
        for(let i = 0; i < allElemArr.length; i++) {
            linksArr.push(allElemArr[i].getAttribute("href"));
        }
        return linksArr;
    }
    let linksArrPromise = curTab.evaluate(getAllQuesLinks);
    return linksArrPromise;
})
.then(function (linksArr) {
    console.log("links to all ques received");
    // console.log(linksArr);
    //ques solve karna ha 
    let questionWillBeSolvedPromise = questionSolver(linksArr[0], 0);
    for(let i = 1; i < linksArr.length; i++) {
        questionWillBeSolvedPromise = questionWillBeSolvedPromise.then(function () {
            return questionSolver(linksArr[i], i);

        })
        //a = a + 10;
        //a = a + 1;

    }
    return questionWillBeSolvedPromise;
})  
.then(function () {
    console.log("question is solved");
})
.catch( function(err) {
    console.log(err)
});
function waitAndClick(algoBtn) {
    let waitAndPromise = new Promise(function (resolve, reject) {
        let waitForSelectorPromise = curTab.waitForSelector(algoBtn);
        waitForSelectorPromise
        .then(function () {
            let clickPromise = curTab.click(algoBtn);
            return clickPromise;
        })
        .then(function () {
            resolve();

        })
        .catch(function(err) {
            reject(err);
        }) 


    });
    return waitAndPromise;       
}
function questionSolver(url, idx) {
    return new Promise(function(resolve, reject) {
    let fullLink = `https://www.hackerrank.com${url}`;
    let goToQuesPagePromise = curTab.goto(fullLink);
    goToQuesPagePromise.then(function () {
        console.log("question opened");
        // resolve();
        //tick the custom input box mark
        let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
        return waitForCheckBoxAndClickPromise;
    })
    .then (function () {
        //select the box where the code will be typed
        let waitForTextBoxPromise = curTab.waitForSelector(".custominput");
        return waitForTextBoxPromise;
    })
    .then(function () {
        let codeWillBeTypedPromise = curTab.type(".custominput", answer[idx]);
        return codeWillBeTypedPromise;
    })
    .then(function() {
        //control key is pressed promise
        let controlPressedPromise = curTab.keyboard.down("Control");
        return controlPressedPromise;
    })
    .then(function () {
        let aKeyPressedPromise = curTab.keyboard.press("V");
        return aKeyPressedPromise;
    })
    .then(function () {
        let xKeyPressedPromise = curTab.keyboard.press("X");
        return xKeyPressedPromise;
    })
    .then(function () {
            ctrlKeyIsReleasedPromise =  curTab.keyboard.up("Control");
            return ctrlKeyIsReleasedPromise;
    })
    .then (function() {
        //select the editor promise
        let cursorOnEditorPromise = curTab.click(".monaco-editor.no-user-select.vs");
        return cursorOnEditorPromise;
    })
    .then(function () {
        controlPressedPromise = curTab.keyboard.down("Control");
        return controlPressedPromise;
    })
    .then(function () { 
        let aKeyPressedPromise = curTab.keyboard.press("A");
        return aKeyPressedPromise;


    })
    .then(function () {
        let vKeyPressedPromise = curTab.keyboard.press("V");
        return vKeyPressedPromise;
    })
    .then(function () {
        let controlDownPromise = curTab.keyboard.up("Control");
        return controlDownPromise;
    }) 
    .then(function () {
        let submitButtonClickedPromise = curTab.click(".hr-monaco-submit");
        return submitButtonClickedPromise;
    }) 
    .then(function () {
        console.log("code submitted successfully");
        resolve();
    })
    .catch(function (err) { 
        console.log(err);
    })
});

}