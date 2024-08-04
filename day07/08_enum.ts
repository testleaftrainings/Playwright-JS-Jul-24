/**
 * Enum - a set of named constants (enumeration)
 * 
 * 1. Numeric enums - auto incremented
 * 2. String enums - string values, no auto-increment behavior
 * 
 */

//Numeric Enum

enum TestResult {
    Pass = 1,
    Fail,
    Skip
}

function logTestResult(testName: string, result: TestResult): void {
    console.log(`Test: ${testName}, Result Code: ${result}`);
    
}

logTestResult("Login Test", TestResult.Pass);
logTestResult("SignUp Test", TestResult.Fail);
logTestResult("Update Profile Test", TestResult.Skip);

//String Enum

enum BrowserType {

    Chrome = "chrome",
    Firefox = "firefox",
    Webkit = "safari",
    Edge = "msedge"
}

function launchBrowser(browserType: BrowserType){
    console.log(`Launching browser: ${browserType}`);
    
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
launchBrowser(BrowserType.Firefox);
launchBrowser(BrowserType.Webkit);

//Heterogeneous Enum

enum BrowserStatus {
    Open = 1,
    Crash ,
    Close = "Closed", 
    Unkown = "Unknown"
}

function reportBrowserStatus(status: BrowserStatus): string{
    return `Current browser status is ${status}`;
}

console.log(reportBrowserStatus(BrowserStatus.Close));
console.log(reportBrowserStatus(BrowserStatus.Open));
console.log(reportBrowserStatus(BrowserStatus.Crash));
console.log(reportBrowserStatus(BrowserStatus.Unkown));
