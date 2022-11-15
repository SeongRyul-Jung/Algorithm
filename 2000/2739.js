const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1; i<=9; i++){
  console.log(`${+input} * ${i} = ${+input*i}`)
}

