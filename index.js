/*
 * Test a company name against a set of strings via the Dice Coefficient
 */
const dice = require('dice-coefficient');
const chalk = require('chalk')

const target = 'Army of the Pure';
const strings = [
  'Army of the Pure',
  'Pure Cosmetics',
  'The Super Army Store',
  'Pure Hatred From The Army',
  'Pure Army',
  'Of the',
  'My Pure Army',
  'Led Of The Army',
  'Army in the Long Pure Way',
  'Amy Pur',
  'Pure Amy',
  'Amy of the Pur',
  'Pur My Amy',
  'Company of the Pure Armies',
  'Amy Pure',
  'Ary of the Pure',
  'Army van der Pure',
  'Army of the Pure BV',
  'Company of Army of the Pure BV',
  'Army of the Pure Holding BV',
];

const commonWords = [
  'company',
  'bv',
  'holding',
];

const minMatch = 0.7;

let matches = [];

strings.forEach(string => {
  const direct = dice(target, string);
  const filter = dice(commonalityFilter(target), commonalityFilter(string));
  console.log(`${chalk.bold(string)}: 
    [direct]: ${direct < minMatch ? direct : chalk.red(direct)}
    [filter]: ${filter < minMatch ? filter : chalk.red(filter)}
  `);

  if (direct >= minMatch && filter >= minMatch) {
    matches.push(string);
  }
});

console.log(`${chalk.bold('Matched these strings:')} \n${matches.join('\n')}`);

function commonalityFilter(string) {
  return string.split(' ').filter(x => !isCommonWord(x.toLowerCase())).join(' ');
}

function isCommonWord (word) {
  return commonWords.includes(word);
}