const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let squared = [];
let result = 0;

    for(let i=0; i<input.length; i++){
        squared[i] = (+input[i]);
    }
    for(let i=0; i<squared.length; i++){
        squared[i] = squared[i] * squared[i]
        result += squared[i]
    }
    
    console.log(result%10); 