let fs = require('fs')
const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(PATH).toString().trim().split('\n')
let count = 0;


for(let i=0; i<input.length-1; i++){
  for(let j=0; j<input[i].length; j++){
    if(input[i][j] === 'a') count++
    else if(input[i][j] === 'e') count++
    else if(input[i][j] === 'i') count++
    else if(input[i][j] === 'o') count++
    else if(input[i][j] === 'u') count++

    if(input[i][j] === 'A') count++
    else if(input[i][j] === 'E') count++
    else if(input[i][j] === 'I') count++
    else if(input[i][j] === 'O') count++
    else if(input[i][j] === 'U') count++
  }
  console.log(count)
  count = 0
}