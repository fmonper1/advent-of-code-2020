import { data } from './data';

/*
 * Solution for the day4
 * https://adventofcode.com/2020/day/4
 */

export default {
  part1() {
    let parsedData = this.parsedData();
    console.log('parsedData', parsedData);
    let valid = 0;
    parsedData.forEach(doc => {
      const allFields = Object.keys(doc).length === 8;
      const northPole = Object.keys(doc).length === 7 && !('cid' in doc);
      if (allFields || northPole) valid += 1;
    });
    console.log(valid);
  },

  part2() {
    let parsedData = this.parsedData();
    let valid = 0;
    parsedData.forEach(doc => {
      const validByr = doc.byr
        ? /([0-9]{4})/g.test(doc.byr) &&
          Number(doc.byr) >= 1920 &&
          Number(doc.byr) <= 2002
        : false;
      const validIyr =
        /([0-9]{4})/g.test(doc.iyr) &&
        Number(doc.iyr) >= 2010 &&
        Number(doc.iyr) <= 2020;
      const validEyr =
        /([0-9]{4})/g.test(doc.eyr) &&
        Number(doc.eyr) >= 2020 &&
        Number(doc.eyr) <= 2030;

      const height = Number(doc.hgt?.slice(0, -2));
      const unit = doc.hgt?.slice(-2);
      const validHgt =
        unit === 'cm'
          ? height <= 193 && height >= 150
          : height <= 76 && height >= 59;

      const validHcl = /#([a-f0-9]{6})/g.test(doc.hcl);
      const validEcl = /amb|blu|brn|gry|grn|hzl|oth/g.test(doc.ecl);
      const validPid = /^[0-9]{9}$/g.test(doc.pid);

      const isValid =
        validByr &&
        validEcl &&
        validEyr &&
        validIyr &&
        validHgt &&
        validHcl &&
        validPid;

      if (isValid) valid += 1;
    });
    console.log('Valid documents:', valid);
  },

  parsedData() {
    return data.split(/\n{2,}/g).map(item => {
      const arr = item
        .replace(/\n/g, ' ')
        .split(' ')
        .reduce((object: any, fields) => {
          let data = fields.split(':');
          return (object[data[0]] = data[1]), object;
        }, {});

      return arr;
    });
  },
};
