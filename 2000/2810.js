let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
// // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let holder = 1;

for(let i=0; i<input[1].length; i++){
  if((input[1][i] === 'L') && (input[1][i+1] === 'L')){
    holder++;
    i++
  }
  else if(input[1][i] === 'S') holder++
}

if(holder < (+input[0])) console.log(holder)
if(holder === (+input[0])) console.log(input[0])
if(holder > (+input[0])) console.log(input[0])