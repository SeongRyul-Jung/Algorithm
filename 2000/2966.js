const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const inp = input[1]
let Adrian = ['A', 'B', 'C']
let Bruno = ['B','A','B','C']
let Goran = ['C','C','A','A','B','B']
let cntA = 0
let cntB = 0
let cntC = 0;

function isAdLong () {
    if(inp.length >= Adrian.length){
        Adrian.push(...Adrian)
        return true
    }else {
        return false
    }
}
function isBrLong () {
    if(inp.length >= Bruno.length){
        Bruno.push(...Bruno)
        return true
    }else {
        return false
    }
}
function isGoLong () {
    if(inp.length >= Goran.length){
        Goran.push(...Goran)
        return true
    }else {
        return false
    }
}
    

while(isAdLong()){
}
while(isBrLong()){
}
while(isGoLong()){
}

for(let i=0; i<inp.length; i++){
        if(inp[i] === Adrian[i]){
            cntA++;
        }
        if(inp[i] === Bruno[i]){
            cntB++;
        }
        if(inp[i] === Goran[i]){
            cntC++;
        }
}

let resultArr = [];
resultArr[0] = cntA;
resultArr[1] = cntB;
resultArr[2] = cntC;

let max = Math.max(...resultArr)

console.log(max)
if(resultArr[0] === max){
    console.log('Adrian')
}
if(resultArr[1] === max){
    console.log('Bruno')
}
if(resultArr[2] === max){
    console.log('Goran')
}