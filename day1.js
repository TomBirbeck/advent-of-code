import { readFileSync } from 'node:fs';

const numbers = readFileSync('day1.txt', { encoding: 'utf-8' });

const elfLoad = numbers.replace(/\r/g, '').trim().split('\n\n');

function calories(elfLoad) {
  let totals = [];
  for (let i = 0; i < elfLoad.length; i++) {
    const numbers = elfLoad[i].split('\n').map(Number);
    const cals = numbers.reduce((a, b) => a + b, 0);
    totals.push(cals);
  }
  const order = totals.sort((a, b) => b - a);
  const topThree = [order[0], order[1], order[2]];
  console.log(topThree.reduce((a, b) => a + b, 0));
  return order;
}

calories(elfLoad);
