class BrowserSession {
    
    //Properties - uninitialized
    browserType: any;
    page: any;
    context: any;

    launchBrowser() {

    }

    navigateToUrl(url) {

    }

    captureScreenshot(fileName){

    }
}

//Creating an object 
const session = new BrowserSession();
session.browserType = "Chrome"; //Manually setting the property
session.launchBrowser();

//With Constructor
class BasePage {

    browserVersion;
    browserType;
    constructor(browserVersion: any, browserType:any){
        this.browserVersion = browserVersion;
        this.browserType = browserType;
    }
    openBrowser() {
        console.log("Open the chrome browser");
        
    }

}
const browser = new BasePage(121, "chrome");
console.log(browser.browserType);
browser.openBrowser()

