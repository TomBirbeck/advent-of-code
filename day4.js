import { readFileSync } from 'node:fs';

const pairs = readFileSync('day4.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n');

//   console.log(pairs)

  function ranges(arr){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        const split = arr[i].split(',')
        const elfOne = split[0].split('-')
        const elfTwo = split[1].split('-')
        if (elfOne[0] >= elfTwo[0] && elfOne[1] <= elfTwo[1]){
            console.log("1", elfOne, "2", elfTwo, "count", count)
            count++
        }
        else if (elfTwo[0] >= elfOne[0] && elfTwo[1] >= elfOne[1]){
            console.log("1", elfOne, "2", elfTwo, "countTwo", count)
            count++
        }
    }
    console.log(count)
  }

  ranges(pairs)

  //part 1 580