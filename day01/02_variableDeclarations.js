var firstname = "Vinoth";
var firstname = "Giridharan";
//var allows redeclaration
//var allows reassignment

//let doesn't allow redeclaration
//let allows reassignment
let employeeId = "TL012";
employeeId = "TL013";
employeeId = true;
let firstname = "Gayathri"
console.log(typeof employeeId);

//redeclaration and reassignment of variables are not allowed in const
const browser = "chrome";
browser = "edge";
console.log(browser); 

/**
 * Scoping - level of accessibility of the variable
 * 1. Global scoping
 * 2. Function scoping
 * 3. Block level scoping
 * 
 */

var gender = 'female';      //global variable
let phoneNumber;
function printGender() {
    var age = 28;       //function scoped variable
    if(gender.startsWith('female')) {
        let color = 'pink';        //block scoped variable
        phoneNumber = 88875832;
        console.log("She/Her");
        console.log("Inside the block using let:" + color);
    } else {
        console.log("He/Him");
    }
    console.log("Inside the function block:" + age);
    console.log(phoneNumber);
   // console.log("Inside the block using var:" + color);
}
printGender();
console.log(gender);

/**
 * var  - function/global scoped
 * let - block scoped
 * const - block scoped
 */

//Hoisting

// console.log(password);
// var password = 'crmsfa';

//Variable declaration is moved to the top
var password;
console.log(password);
password = 'crmsfa';
console.log(password);


// console.log(password);
// let password = 'crmsfa';

let password;
console.log(password);
password = 'crmsfa';

console.log(regNo);
const regNo = 675;

// const regNo;
// console.log(regNo);
// regNo = 675;
