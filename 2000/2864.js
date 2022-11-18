let input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
// // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let splitInput = []
for(let i=0; i<2; i++) splitInput[i] = input[i].split('')

let strA = ''
let strB = ''
let max, min = 0;

for(let i=0; i<2; i++){
  for(let j=0; j<splitInput[i].length; j++){
    if(i === 0){
      if((+splitInput[i][j]) === 5) strA += '6'
      else strA += splitInput[i][j]
    }

      if(i === 1) {
        if((+splitInput[i][j]) === 5) strB += '6'
        else strB += splitInput[i][j]
    }
  }
}
max = (+strA) + (+strB)

strA = ''
strB = ''

for(let i=0; i<2; i++){
  for(let j=0; j<splitInput[i].length; j++){
    if(i === 0){
      if((+splitInput[i][j]) === 6) strA += '5'
      else strA += splitInput[i][j]
    }

      if(i === 1) {
        if((+splitInput[i][j]) === 6) strB += '5'
        else strB += splitInput[i][j]
    }
  }
}
min = (+strA) + (+strB)

console.log(min, max)