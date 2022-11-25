let fs = require('fs')
const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(PATH).toString().trim().split('\n')
const drink = input[1].split(' ')
const maxChick = +input[0]
const coke = +drink[0]
const beer = +drink[1]


let chick = (coke/2) + beer

console.log(Math.min(chick, maxChick))