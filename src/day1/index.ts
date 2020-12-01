import { data } from './data';

const result = data.split(/\r\n|\r|\n/g).map(i => Number(i));

let pairs: [number, number] = [0, 0];

result.forEach((entry1, index) => {
  result.slice(index + 1).forEach(entry2 => {
    if (entry1 + entry2 === 2020) {
      pairs = [entry1, entry2];
    }
  });
});

export const part1 = {
  pairs,
  sum: pairs[0] * pairs[1],
};

let triples: [number, number, number] = [0, 0, 0];

result.forEach((entry1, index) => {
  result.slice(index + 1).forEach(entry2 => {
    result.slice(index + 2).forEach(entry3 => {
      if (entry1 + entry2 + entry3 === 2020) {
        triples = [entry1, entry2, entry3];
      }
    });
  });
});

export const part2 = {
  triples,
  sum: triples[0] * triples[1] * triples[2],
};
