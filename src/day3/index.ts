import { data } from './data';

/*
 * Solution for the day3
 * https://adventofcode.com/2020/day/3
 */

const width = data.split(/\r\n|\r|\n/g)[0].length;
const parsedData = data.split(/\r\n|\r|\n/g).map(i => i.split(''));

export default {
  part1() {
    // 280 trees on the way
    const totalTrees = this.slopeCalculcator(1, 3);
  },
  part2() {
    // 77 trees on the way
    // 280 trees on the way
    // 74 trees on the way
    // 78 trees on the way
    // 35 trees on the way
    // 4355551200 product of total trees
    const one = this.slopeCalculcator(1, 1);
    const two = this.slopeCalculcator(1, 3);
    const three = this.slopeCalculcator(1, 5);
    const four = this.slopeCalculcator(1, 7);
    const five = this.slopeCalculcator(2, 1);
    console.log(one * two * three * four * five);
  },

  slopeCalculcator(downStep = 1, rightStep = 3) {
    let totalTrees = 0;
    for (
      let yPosition = 0;
      yPosition < parsedData.length;
      yPosition += downStep
    ) {
      const actualY = yPosition / downStep;
      if (parsedData[yPosition][(actualY * rightStep) % width] === '#')
        totalTrees += 1;
    }

    console.log(`${totalTrees} trees on the way`);
    return totalTrees;
  },
};
