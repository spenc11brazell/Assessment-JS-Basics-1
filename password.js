console.log('Welcome to your login!')

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter your password", function(input){
    tokens = input.split('');

    const str = 'codeisfun2me. Answer:'
        console.log(`${str} ${str.length}`)

    if (!(password.length() <= 10)) {
        console.log('false')
        }


});

