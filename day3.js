import { readFileSync } from 'node:fs';

const items = readFileSync('day3.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n');

const tests = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
];

function Backpack(items) {
  const singles = [];
  for (let i = 0; i < items.length; i++) {
    const arr1 = items[i].slice(0, items[i].length / 2).split('');
    const arr2 = items[i].slice(items[i].length / 2).split('');
    for (let j = 0; j < arr1.length; j++) {
      if (arr2.includes(arr1[j])) {
        singles.push(arr1[j]);
        j = arr1.length;
      }
    }
  }
  return singles
}
function ThreeBackpack(items) {
  const singles = [];
  for (let i = 0; i <= items.length; i+=3) {
    const arr1 = items[i];
    const arr2 = items[i+1];
    const arr3 = items[i+2];
    if (arr1 && arr2 && arr3){
      for (let j = 0; j < arr1.length; j++) {
       if (arr2.includes(arr1[j]) && arr3.includes(arr1[j])) {
          singles.push(arr1[j]);
          j=arr1.length
        }
      }
    }
    }
  return singles
}

// ThreeBackpack(tests)

function Score(){
  let total = 0
  const priorities = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const arr = ThreeBackpack(items)
  for (let i = 0; i < arr.length; i++){
    const prio = (element) => element === arr[i]
    total += ((priorities.findIndex(prio)) + 1)
  }
  console.log(total)
}

Score()

//part 1 7766 ?
//part 2 2415