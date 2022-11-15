const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let str = ''

for(let i=0; i<(+input); i++){
  str += '*'
  console.log(str)
}