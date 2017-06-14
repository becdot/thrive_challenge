/**
 * INSTRUCTIONS
 *
 * Assume the below is JSON we get from an endpoint, bounded to a max of 30 articles.
 *
 * Create a function “writers” that returns an array containing the names of all female celebrities
 * (type=0 represents a celebrity author) who write for the 'Time Well Spent' or 'Well-Being'
 * "categories", and are born after Jan 1, 1970.
 *
 * Do not mutate the original list.
 */

/**
 * TODO
 *
 * - Consider moving this out into a class for better organization
 *   - Filter functions could be methods
 *   - CATEGORIES is begging to be a static class method
 * - Actually calculate (or use a library) to convert dates => ms, instead of leaving this hard-coded
 * - Move JSON to a separate file instead of hard-coding in here
 */

const writerJSON = [
  {
    "author": "Ashton Kutcher",
    "type": 0,
    "sex": "male",
    "birthday_ms": "164347200000",
    "articleText": ".....",
    "title": "...",
    "categories": [
      "Time Well Spent",
      "Wisdom",
      "Wonder"
    ]
  },
  {
    "author": "Cal Newport",
    "type": 0,
    "sex": "male",
    "birthday_ms": "11851200000",
    "articleText": ".....",
    "title": "...",
    "categories": [
      "Work Smarter",
      "Unplug & Recharge"
    ]
  },
  {
    "author": "Melissa Hereford",
    "type": 1,
    "sex": "female",
    "birthday_ms": "489038400000",
    "articleText": ".....",
    "title": "...",
    "categories": [
      "Time Well Spent",
      "Wisdom",
      "Wonder"
    ]
  },
  {
    "author": "Jane Landes",
    "type": 2,
    "sex": "female",
    "birthday_ms": "-426110400000",
    "articleText": ".....",
    "title": "...",
    "categories": [
      "Work Smarter",
      "Giving"
    ]
  },
  {
    "author": "Deepak Chopra",
    "type": 0,
    "sex": "male",
    "birthday_ms": "-600202800000",
    "articleText": ".....",
    "title": "...",
    "categories": [
      "Giving",
      "Well-Being",
      "Time Well Spent"
    ]
  },
  {
    "author": "Selena Gomez",
    "type": 0,
    "sex": "female",
    "birthday_ms": "719038403000",
    "articleText": ".....",
    "title": "...",
    "categories": [
      "Giving",
      "Well-Being",
      "Time Well Spent"
    ]
  },
  {
    "author": "Jenifer Aniston",
    "type": 0,
    "sex": "female",
    "birthday_ms": "589038413401",
    "articleText": ".....",
    "title": "...",
    "categories": [
      "Well-Being"
    ]
  }
];

const writers = (data) => {
  const CATEGORIES = ["Time Well Spent", "Well-Being"];
  const isWoman = writer => writer.sex === "female";
  const isCelebrity = writer => writer.type === 0;
  const writesWell = writer => writer.categories.some(cat => CATEGORIES.indexOf(cat) !== 0);
  const isYoung = writer => writer.birthday_ms >= 18000000;
  return data.filter(writer => isWoman(writer) && isCelebrity(writer) && writesWell(writer) && isYoung(writer));
};

module.exports = {
  writers: writers,
  DATA: writerJSON
};
