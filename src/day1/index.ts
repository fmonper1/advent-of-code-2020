import { data } from './data';

const result = data.split(/\r\n|\r|\n/g).map(i => Number(i));

const pairs: number[][] = [];

result.forEach((entry1, index) => {
  result.slice(index + 1).forEach(entry2 => {
    if (entry1 + entry2 === 2020) {
      pairs.push([entry1, entry2]);
    }
  });
});

export const part1 = {
  pairs: pairs[0],
  sum: pairs[0][0] * pairs[0][1],
};

const triples: number[][] = [];

result.forEach((entry1, index) => {
  result.slice(index + 1).forEach(entry2 => {
    result.slice(index + 2).forEach(entry3 => {
      if (entry1 + entry2 + entry3 === 2020) {
        triples.push([entry1, entry2, entry3]);
      }
    });
  });
});

export const part2 = {
  triples: triples[0],
  sum: triples[0][0] * triples[0][1] * triples[0][2],
};
