let fs = require('fs')
const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(PATH).toString().trim().split('\n');

let n = (+input);
let count = 0;

for(let i=1; i<=n; i++){
  let arr = String(i)
  if(i<100){
    count++;
    continue;
  }
  let a = (+arr[0]) - (+arr[1])
  let b = (+arr[1]) - (+arr[2])
  if(a === b) count++;
}

console.log(count)