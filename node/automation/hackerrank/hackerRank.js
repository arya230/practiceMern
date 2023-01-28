const { default: puppeteer } = require("puppeteer");

const pupeeteer = require("puppeteer");


let curTab;


let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport:null,
    args:["--start-maximized"],
    //chrome://version
    // C:\Program Files\Google\Chrome\Application\chrome.exe
    // executablePath: "/path/to/chrome",
});
browserOpenPromise //fulfill
.then(function(browser) {
    console.log("browser is open");
    //console.log(browser); 
    //an array of all open pages inside the Browser.
    let allTabsPromise = browser.pages();//it brings information of all the tabs in the browser
    return allTabsPromise;
})

// allTabsPromise.then() another reason why return is used
.then(function(allTabsArr) {

    curTab =  allTabsArr[3];
    console.log("new tab");
    //URL to navigate page to
    let visitingLoginPagePromise = curTab.goto("https://www.hackerrank.com/auth/login");
    return visitingLoginPagePromise;

})
.then(function() {
    console.log("Hackerrank login page opened");
    let emailWillBeTypedPromise = curTab.type("input[name='username']", email);
    return emailWillBeTypedPromise;
})
.then(function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = curTab.type("input[type='password']", password);
    return passwordWillBeTypedPromise;
})
.then(function () {
    console.log("password has benn typed");
    let willBeLoggedInPromise = curTab.click(".ui-btn.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return willBeLoggedInPromise;
})
.then( function() {
    console.log("logged into hackerrank successfully");
})
.catch( function(err) {
    console.log(err)
});