function processUserInput(callback){
    let name = prompt("Please enter your name");
    callback(name);
}

function displayName(name) {
    alert("Hello " + name );
}

//Calling the function
processUserInput(displayName)