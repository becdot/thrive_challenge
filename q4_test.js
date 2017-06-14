const assert = require('chai').assert;

const filterWriters = require('./q4.js').writers;
const DATA = require('./q4.js').DATA;

describe('writers', () => {
  describe('with valid data', () => {
    before(() => {
      // self.DATA_COPY = JSON.parse(JSON.stringify(DATA));
      self.writers = filterWriters(DATA);
    });

    it('should not return an empty array', () => {
      assert.isArray(self.writers);
      assert.isNotEmpty(self.writers);
    });

    it('should not mutate the original array', () => {
      const dataCopy = JSON.parse(JSON.stringify(DATA));
      filterWriters(DATA);
      assert.deepEqual(dataCopy, DATA);
    });

    it('should return all women writers', () => {
      assert.ok(self.writers.every(writer => writer.sex === "female"));
    });

    it('should return all celebrities', () => {
      assert.ok(self.writers.every(writer => writer.type === 0));
    });

    it('should return only writers whose categories include either "Time Well Spent" or "Well-Being"', () => {
      const CATEGORIES = ["Time Well Spent", "Well-Being"];
      self.writers.forEach(writer => {
        assert.ok(writer.categories.some(cat => CATEGORIES.indexOf(cat) !== -1));
      });
    });

    it('should return only writers who were born after 1/1/1970', () => {
      const JAN_FIRST_IN_MS = 18000000;
      assert.ok(self.writers.every(writer => writer.birthday_ms >= JAN_FIRST_IN_MS));
    });
  });
});
