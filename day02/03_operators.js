//Increment operator

let value = 10;
//Post increment - value++
//value = value+1
console.log(value++);
console.log(value)

//Pre increment
let result = 20;
console.log(++result);

//Post decrement
console.log(result--);
console.log(result);

//Pre decrement
console.log(--result);

/**
 * Strict equality - 1. Compares the data type 2. Compares the value
 * Non-strict equality - Compares only the values and not the data type
 */

console.log(1===1); //true
console.log(1===5); //false
console.log(1=='1'); //true
console.log("chrome"==="Chrome"); //false
console.log(1==true); //true
console.log(1===true); //false
console.log(true =="true"); //false
