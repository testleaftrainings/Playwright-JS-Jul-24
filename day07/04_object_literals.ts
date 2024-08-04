/**
 * collection of key-value pairs --> properties
 * 
 * 
 */
/**
 * Syntax:
 * let objectName {
 *      key1: datatype,
 *      key2: datatype
 * } = {
 *      key1: value,
 *      key2: value
 * }
 */


let user: {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    isActive: boolean
}= {
    firstName : "Sowmya",
    lastName : "Anuradha",
    age: 21,
    email: "sowmya@gmail.com",
    isActive: true
}

//To access the different properties, you can use dot notation or square bracket
//console.log(objectName.property);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.email);
console.log(user.isActive);

//console.log(objectName["property"])
console.log(user["firstName"]);

