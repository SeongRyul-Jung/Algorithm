let input = require('fs').readFileSync('input.txt').toString().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let sum = a+b+c;

if(sum === 180 && a === 60 && b === 60 && c === 60){
    console.log("Equilateral");
}
else if((sum === 180 ) && ((a===b) || (a===c) || (b===c))){
    console.log("Isosceles");
}
else if((sum === 180) && ((a !== b) || (a!==c) || (b!==c))){
    console.log("Scalene")
}
else if((sum !== 180)){
    console.log("Error");
}