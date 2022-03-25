console.log("Welcome to the password validator tool.")

const readline = require('readline');
const { workerData } = require('worker_threads');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter a password: ", function(input) {
    let pwdLength = false
    let pwdUpperStart = false
    
    if (input.length > 10) {
        pwdLength = true
    }
    function hasCapital (word){
        return word.charAt(0) === word.charAt(0).toUpperCase()
    }
    if(hasCapital(input) === true) {
        pwdUpperStart = true
    }

    if (pwdLength === true && pwdUpperStart === true) {
        console.log("Success!")
    } else {
        console.log("Failed to register password. Please make sure it is as least 10 characters long and starts with an upper case letter. ")
    }
reader.close()

}
);

