import assert from 'assert';
import { doMaths } from '../index.js';

describe('tests', function () {
  it('should do maths', function () {
    assert.equal(doMaths(2, 3), 5);
  });
});