import { helloWorld } from '../';

describe('Hello World', function () {
  it('returns a hello world', function () {
    return expect(helloWorld()).to.be.equal('Hello World');
  });
});
