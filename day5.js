import { readFileSync } from 'node:fs';

const data = readFileSync('day5test.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
   .trimEnd()
const [columns, instructions] = data.split('\n\n')
const regex = /\d+/g

const stacks = columns.split('\n').map((lines)=> [...lines].filter((v, i) => i % 4 === 1))
const moves = instructions.split('\n').map((line) => line.match(regex))
const indexes = stacks.pop()

// console.log(indexes, stacks, moves)

function moveCrates(stacks, moves){
       for (let i = 0; i < moves.length; i++){
        console.log(moves[i])
       }
    }
    
    moveCrates(stacks, moves)