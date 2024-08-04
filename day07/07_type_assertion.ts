/**
 * Type Assertion
 * 
 * 
 */
//Using angular brackets
let response: any = "Record created successfully";
let myResponse = (<string>response);
console.log(myResponse.length);
console.log(typeof myResponse);

let sCode: any = "Success";
let statusLength: string = sCode as string;
console.log(statusLength);


