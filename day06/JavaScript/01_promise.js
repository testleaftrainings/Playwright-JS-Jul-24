/**
 * Promise - represents the eventual completion or failure of an async operations
 * 
 * 1. Pending - initial state
 * 2. Fulfilled - success
 * 3. Rejected - failure
 * 
 */


//Creating a promise
let promise = new Promise((resolve, reject) => {

    let success = false;
    if(success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }

}) ;

//Consuming the promise
promise.then(result => console.log(result))   //Operation successful - if resolved
.catch(error => console.log(error));    //Operation failed -if rejected