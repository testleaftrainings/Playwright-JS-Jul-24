// Methods in Array

/**
 * push() - add one or more elements to the end of an array
 *        - return the new length of the array
 */

let userProfiles = ['Giri', 'Selva', "Santhosh", 'Sudarshan'];
userProfiles.push('Sugashri', 'Sneha');
console.log(userProfiles);

/**
 * unshift() - add one or more elements to the beginning of the array
 * 
 */

userProfiles.unshift('Vinoth', 'Suchithra');
console.log(userProfiles);

/**
 * 
 * pop() - remove the last element from the array
 */

let newArray = userProfiles.pop();
console.log(newArray); //Sneha
console.log(userProfiles);

/**
 * shift() - to remove the first element from the array
 * 
 */

let testingTypes = ["Sanity", "Smoke", "Regression", "Functional"];
testingTypes.shift();
console.log(testingTypes);

//slice()
let browserNames = ["Chrome", "Firefox", "Safari", "Edge"];
let bNames = browserNames.slice(1, 3);
console.log(bNames);
// console.log(bNames);
 bNames.push('Opera')
console.log(bNames);

//splice - changes the contents of the array by removing or replacing the existing elements
let months = ['Jan', 'Feb', 'Mar', 'Apr'];
              //0       1     2      3    
months.splice(1, 0, "May", "June");
            //start index, del count, replace value
console.log(months);

//To get the length
let automationTools = ["Selenium", "Playwright", "Cypress"];
console.log(automationTools.length);

automationTools[4] = "WebDriverIO";
automationTools[7] = "AccelQ"
console.log(automationTools.length);

let number = [];
console.log(number.length);

//join
let browserVersions = [126, 124.6, 119.78];
console.log(browserVersions.join('-'));

//concat - merges two arrays into a new array
let array1 = [1,2,3,4,5,6];
let array2 = [7,8,9,10];
let mergedArray = array1.concat(array2)
console.log(mergedArray);

//sort
let num = [3,7,8,1,4,2,11]; //lexicographical sorting
console.log(num.sort());

//reverse
console.log(num.reverse());

//Spread syntax
let arr1 = ['a','b','c','d'];
let arr2 = [...arr1,'e','f','g'];
console.log(arr2);

let arr = [45,6, 23, 5, 2];
//Sort the numbers numerically
arr.sort((a,b)=>a-b);
/**
 * a<b negative
 * a>b positive
 * a is placed after b
 * a===b
 * 
 * a-b = 45-6 = 39 //
 * 
 */
console.log(arr);

let numbers = [1,2,3,4];
numbers.forEach((num)=>console.log(num));
// for (let index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);  
// }

//map()
let squares = numbers.map(num => num * 2);
console.log(squares);

//filter
