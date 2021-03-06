const syncPipe = require('../sync');
const expect = require('chai').expect;

describe('syncPipe function', () => {
  it('exists', () => {
    expect(syncPipe).to.be.ok;
  });

  it('sets first command to argument', () => {
    expect(syncPipe('set 1')).to.eql(1);
  });

  it('takes two commands', () => {
    expect(syncPipe('set 1 | add 1')).to.eql(2);
  });

  it('takes multiple commands', () => {
    expect(syncPipe('set 1 | mult 10 | mult 4 | add 2')).to.eql(42);
  })
})