import { data } from './data';

/*
 * Solution for the day2
 * https://adventofcode.com/2020/day/2
 */

// Format data for usability.
export const result: {
  min: number;
  max: number;
  letter: string;
  password: string;
}[] = data.split(/\r\n|\r|\n/g).map(i => {
  const splitted = i.split(' ');
  return {
    min: Number(splitted[0].split('-')[0]),
    max: Number(splitted[0].split('-')[1]),
    letter: splitted[1].split(':')[0],
    password: splitted[2],
  };
});

export const step1 = result.filter(passwordEntry => {
  if (
    passwordEntry.min <=
      Number(passwordEntry.password.split(passwordEntry.letter).length - 1) &&
    Number(passwordEntry.password.split(passwordEntry.letter).length - 1) <=
      passwordEntry.max
  ) {
    return passwordEntry;
  }
});

//step1.length === 396

export const step2 = result.filter(passwordEntry => {
  if (
    (passwordEntry.password[passwordEntry.min - 1] === passwordEntry.letter &&
      passwordEntry.password[passwordEntry.max - 1] !== passwordEntry.letter) ||
    (passwordEntry.password[passwordEntry.max - 1] === passwordEntry.letter &&
      passwordEntry.password[passwordEntry.min - 1] !== passwordEntry.letter)
  ) {
    return passwordEntry;
  }
});

//step2.length === 428
