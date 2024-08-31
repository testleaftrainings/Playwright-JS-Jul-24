var BrowserSession = /** @class */ (function () {
    function BrowserSession() {
    }
    BrowserSession.prototype.launchBrowser = function () {
    };
    BrowserSession.prototype.navigateToUrl = function (url) {
    };
    BrowserSession.prototype.captureScreenshot = function (fileName) {
    };
    return BrowserSession;
}());
//Creating an object 
var session = new BrowserSession();
session.browserType = "Chrome"; //Manually setting the property
session.launchBrowser();
//With Constructor
var BasePage = /** @class */ (function () {
    function BasePage(browserVersion, browserType) {
        this.browserVersion = browserVersion;
        this.browserType = browserType;
    }
    BasePage.prototype.openBrowser = function () {
        console.log("Open the chrome browser");
    };
    return BasePage;
}());
var browser = new BasePage(121, "chrome");
console.log(browser.browserType);
browser.openBrowser();
