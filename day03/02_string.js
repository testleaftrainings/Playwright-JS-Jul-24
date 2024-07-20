//String - sequence of characters
/**
 * 1. String literal - mostly used and preferred
 * 
 * declare the string using a '', "", ``
 * let username = 'demosalesmanager';
 * string pool 
 * immutable
 * effective memory utilization
 * typeof - string
 * 2. String Object - declared using String constructor
 * let username = new String('demosalesmanager') ;username
 * consumes memory
 * 
 * let name1 = 'Sneha'
 * let name2 = 'Sneha'
 * name1 === name2 true
    primitive type
    let name1 = new String('Sneha')
    let name2 = new String('Sneha')

    name1 === name2 false
    typeof - object
 */
let username = 'democsr';
console.log(typeof username);

let password = new String('crmsfa');
console.log(typeof password);

//Escape sequence

let testType = 'It\'s a regression test';
// let testType = "It's a regression test";
let name = "Hello,This is a \"double quote \"";

//Template literal - dynamic values ${} - introduced in ES6
let testcases = 450;
let output = `There are ${testcases} testcases automated in our project`;
console.log(output);
console.log(`There are ${testcases} testcases automated in our project`);

//Concatenation
let testcaseName = "Create a new Opportunity";
let testcaseId = 231;
let result = testcaseId+ "-" +testcaseName+ ":passed in last execution";

//String methods
//How to get the count of characters in the string?
let courseName = "Playwright"; //Length starts from 1
//index - starts from 0
console.log (`The length of the string is ${courseName.length}`);

//Find the first character of the given string
console.log(`The first character in the string is ${courseName.charAt(0)}`);
console.log(`The character in the fifth index is ${courseName.charAt(5)}`);
console.log(`The second character from the last is ${courseName.charAt(courseName.length-2)}`);
//coursename.charAt(10-2 = 8)
//Playwright
//12345678910
//0123456789

{5,7,9,1,24}

//indexOf - index of the character
console.log(`The index of a is ${courseName.indexOf('a')}`);
console.log(`The index of z is ${courseName.indexOf('z')}`);
//No match -1

courseName = 'Selenium';
//includes - true/ false
console.log(`${courseName.includes('enium')}`);

//lowercase & uppercase
console.log(`${courseName.toUpperCase()}`);

//slice - extracts a part of the string and returns as a new string
let welcomeMessage = 'Welcome to Testleaf & Happy Learning!';
let outputMessage = welcomeMessage.slice(7, 15);
console.log(outputMessage);


//substring

let outputString = welcomeMessage.substring(10, 24);
console.log(outputString);

//split - splits the string into array of substrings
let companyName = "Testleaf Qeagle Chennai";
console.log(companyName.split(" "));

//String reversal
let compName = "Testleaf"; //O/p: faeltset 
//Testleaf
//01234567
//12345678

function reverseString() {
    let chars = compName.split("");
    console.log(chars);
    let reversed = " ";
    for (let index = chars.length-1; index >= 0; index--) {
        
        reversed = reversed + chars[index]
    }
    return reversed;
}
console.log(reverseString());


let originalString  = "Welcome to Testleaf";
let reverse = originalString.split("").reverse().join('');
console.log(reverse);