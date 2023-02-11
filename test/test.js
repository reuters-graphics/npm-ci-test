import { doDifferentMaths, doMaths, doMaxMaths } from '../index.js';

import assert from 'assert';

describe('tests', function () {
  it('should do maths', function () {
    assert.equal(doMaths(2, 3), 5);
  });

  it('should do more maths', function () {
    assert.equal(doMaths(2, 2), 4);
  });

  it('should do different maths', function () {
    assert.equal(doDifferentMaths(3, 3), 9);
  });

  it('should do more different maths', function () {
    assert.equal(doDifferentMaths(4, 4), 16);
  });

  it('should do max maths', function () {
    assert.equal(doMaxMaths(4, 8), 1);
  });
});