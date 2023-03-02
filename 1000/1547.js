const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(PATH).toString().trim().split('\n');
const m = input[0];
let x = []
let y = []
let ball = 1;

for(let i=1; i<=m; i++) {
  x[i-1] = (+input[i][0]);
  y[i-1] = (+input[i][2]);
}

for(let i=0; i<m; i++) {
  if(ball === x[i]) ball = y[i]
  else if(ball === y[i]) ball = x[i]
}
console.log(ball)