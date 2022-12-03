import { readFileSync } from 'node:fs';

const items = readFileSync('day3.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n');
// console.log(items);

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
    // console.log(
    //   items[i].length,
    //   'arr1',
    //   arr1,
    //   arr1.length,
    //   'arr2',
    //   arr2,
    //   arr2.length
    // );
    for (let j = 0; j < arr1.length; j++) {
      if (arr2.includes(arr1[j])) {
        singles.push(arr1[j]);
        j = arr1.length;
      }
    }
  }
  return singles
}

function Score(){
  let total = 0
  const priorities = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const arr = Backpack(items)
  for (let i = 0; i < arr.length; i++){
    const prio = (element) => element === arr[i]
    total += (priorities.findIndex(prio)) + 1
  }
  console.log(total)
}

Score()

