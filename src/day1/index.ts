import { data } from './data';

const result = data.split(/\r\n|\r|\n/g);

const pairs: number[][] = [];

result.forEach((entry1, index1) => {
  result.slice(index1).forEach(entry2 => {
    if (Number(entry1) + Number(entry2) === 2020) {
      pairs.push([Number(entry1), Number(entry2)]);
    }
  });
});

export const part1 = {
  pairs: pairs[0],
  sum: pairs[0][0] * pairs[0][1],
};

const triples: number[][] = [];

result.forEach((entry1, index1) => {
  result.slice(index1).forEach(entry2 => {
    result.slice(index1 + 1).forEach(entry3 => {
      if (Number(entry1) + Number(entry2) + Number(entry3) === 2020) {
        triples.push([Number(entry1), Number(entry2), Number(entry3)]);
      }
    });
  });
});

export const part2 = {
  triples: triples[0],
  sum: triples[0][0] * triples[0][1] * triples[0][2],
};
