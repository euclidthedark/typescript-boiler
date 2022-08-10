import { forMockTest } from '../../src/libfile';

describe('libfile', function () {
  it('returns a number + 4', function () {
    return expect(forMockTest(4)).to.be.equal(8);
  });
});

