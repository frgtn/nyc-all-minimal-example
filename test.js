const { expect } = require('chai');
const  { testfunction } = require('./index.js');


describe('test', () => {
    it('should succeed', () => {
        expect(testfunction(2, 2)).to.equal(4);
    });
});
