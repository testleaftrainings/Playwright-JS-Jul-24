function fetchUserData(userId){
//Create a promise
return new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(userId === 21) {
            resolve({id: 21, name: "Ramya", email:"ramya@gmail.com"});
        } else {
            reject(new Error("User Not Found"))
        }

    }, 5000)
})
}

//Consuming the promise
fetchUserData(21)
.then(userDetails => {
    console.log('User Found:', userDetails.name);
})

.catch(errorMsg =>{
    console.error(errorMsg);
})