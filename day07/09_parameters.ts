/**
 * 
 * Parameters - Optional & Default
 * await page.goto("https://login.slaesforce.com", {timeout: 50000}) 
 * 
 * Form
 * Mandatory fields
 * First Name
 * Surname
 * Age
 * Date of Birth
 * Gender
 * Nationality
 * 
 * Optional fields
 * Secondary Address
 * Landline 
 * 
 */

function userRegistration(fName:string, lName: string, year:number, gender?:string, height?:number){
    console.log(`Sign up with ${fName}, ${lName}, ${year}, ${gender}, ${height}`);
}

userRegistration('Dinakaran', 'Bala', 1995, 'Male');

//Default Parameter
function profile(userName:string, isValid:boolean, dob?:string, profileStatus:string = "Available"){
    console.log(`Profile Details: ${userName}, ${isValid}, ${profileStatus}, ${dob}`);    
}

profile("Nithya", true, "Aug 4");
