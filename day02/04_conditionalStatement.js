//if else

function getBrowser() {
    if(browserName === "chrome") {
        console.log("Supported browser");
    } else {
        console.log("Unsupported browser");
    }
}
let browserName = 'chrome';
getBrowser();

//if else if --> multiple conditions

function getBrowserVersion() {
    if(browser==='chrome'){
        return 126;
    } else if(browser==='edge'){
        return 126.7;
    } else if(browser==='safari'){
        return 18;
    } else if(browser==='firefox'){
        return 120;
    } else {
        return 'Unsupported browser'
    }
}
let browser = 'edge';
//Function Expression
let browserFunction = getBrowserVersion();
console.log(browserFunction);

//Switch case

console.log("-------------");
console.log("Executing switch case");

function getVersion() {

    switch (browser) {
        case 'chrome':
            console.log("126");
            break;
        
        case 'edge':
            console.log("126.7");
            break;
        
        case 'firefox':
            console.log("120");
            break;
    
        default:
            console.log("Unsupported browser");
            break;
    }

}
browser = 'firefox';
getVersion();