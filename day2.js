import { readFileSync } from 'node:fs';

const moves = readFileSync('day2.txt', { encoding: 'utf-8' });
const replace = moves.replace(/\r/g, '').trim().split('\n');

function score(arr) {
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    const set = arr[i].replace(/\s+/g, '').split('');
    if (set[0] === 'A') {
      if (set[1] === 'X') {
        score += 4;
      } else if (set[1] === 'Y') {
        score += 8;
      } else if (set[1] === 'Z') {
        score += 3;
      }
    } else if (set[0] === 'B') {
      if (set[1] === 'X') {
        score += 1;
      } else if (set[1] === 'Y') {
        score += 5;
      } else if (set[1] === 'Z') {
        score += 9;
      }
    } else if (set[0] === 'C') {
      if (set[1] === 'X') {
        score += 7;
      } else if (set[1] === 'Y') {
        score += 2;
      } else if (set[1] === 'Z') {
        score += 6;
      }
    }
  }
  console.log('score', score);
  return score;
}

score(replace);

// part 1 = 15422

// A = Rock
// B = Paper
// C = Scissors

// X = Rock (1)
// Y = Paper (2)
// Z = Scissors (3)

// win = 6
// draw = 3
// loss = 0

function scoreTwo(arr) {
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    const set = arr[i].replace(/\s+/g, '').split('');
    if (set[1] === 'X') {
      if (set[0] === 'A') {
        score += 3;
      } else if (set[0] === 'B') {
        score += 1;
      } else if (set[0] === 'C') {
        score += 2;
      }
    } else if (set[1] === 'Y') {
      if (set[0] === 'A') {
        score += 4;
      } else if (set[0] === 'B') {
        score += 5;
      } else if (set[0] === 'C') {
        score += 6;
      }
    } else if (set[1] === 'Z') {
      if (set[0] === 'A') {
        score += 8;
      } else if (set[0] === 'B') {
        score += 9;
      } else if (set[0] === 'C') {
        score += 7;
      }
    }
  }

  console.log('scoreTwo', score);
  return score;
}

scoreTwo(replace);

// part 2 = 15422

// A = Rock
// B = Paper
// C = Scissors

// X = lose
// Y = draw
// Z = win

// win = 6
// draw = 3
// loss = 0
