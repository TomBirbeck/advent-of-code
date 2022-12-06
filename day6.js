import { readFileSync } from 'node:fs';

const data = readFileSync('day6.txt', { encoding: 'utf-8' }).split('')


function checkUnique(arr){
    return new Set(arr).size === arr.length
}

function pattern(data) {
    let fours = [];
    for (let i = 0; i < data.length; i++) {
      fours.push(data[i]);
      if (fours.length > 4) {
        fours.shift();
      }
      if (fours.length === 4 && checkUnique(fours)) {
        console.log(i + 1);
        break;
      }
    }
  }

  pattern(data)

  //part 1 1757

  