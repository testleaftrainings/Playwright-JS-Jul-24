/**
 * Type Annotations 
 *  - explicitly mentioning the type for a variable
 * let bookId: number = 9876;
 * 
 * 
 */

//Explicit type inference
function addTwoNumbers(x:number, y:number): number{
          return x+y;
    }

//Type Annotation - partial one

function addNumbers(x:number, y:number){
    return x+y;
}

/**
 * 
 * Type Aliases
 *  - way to create new names for the types
 * type aliasName = value
 *
 * 
 * */ 

// "|" - union type
type stringOrNumber = string|number|boolean;
let bankAcctNum:stringOrNumber = "67672876398179";
bankAcctNum = 5667786909;

type supportedBrowsers = "Chromium"|"Firefox";
function invokeBrowsers(browserName: supportedBrowsers):void{
    if(browserName==="Chromium"){
        console.log("Launch Chromium browser");
        
    }  else {
        console.log("Launch Firefox browser");
        
    } 

}
invokeBrowsers("Chromium");

//Intersection Types

type Admin = {
    adminName: string,
    privileges: string[]
};

type Employee = {
    name: string,
    empId: number,
    date: string
}

type QA = Admin & Employee
const user1: QA = {
    adminName: "Testleaf",
    name: "Aroun",
    privileges: ["server"],
    empId: 1001,
    date: "03 Aug 2023"
}

console.log(user1.privileges);

