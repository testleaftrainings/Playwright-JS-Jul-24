/**
 * 1. Variable Hoisting
 * 2. Function Hoisting
 * 
 * var, let and const 
 * 
 */

// console.log(username);            //undefined      
// var username = "Testleaf";

/**
 * var - global & function scoped
 * var username;                //undefined
 * console.log(username);
 * username = "Testleaf";
 * 
 * 
 */

// console.log(password);          //Reference Error: Cannot access 'password' before initialization
// let password = "crmsfa";

/**
 * let password;
 * console.log(password);
 * password= "crmsfa"
 * 
 */

//Calling the function
console.log(userCredentials());

  function userCredentials() {
    return "Hi, Kowsalya!"
  }