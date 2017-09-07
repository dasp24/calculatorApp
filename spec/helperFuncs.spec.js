const {
    expect
} = require('chai');

const {
    operation,
    updateInput
} = require('../src/redux/helperFuncs');

describe('helper functions - operation and updateInput', () => {
    it('exists', () => {
        expect(operation).to.be.a('function');
        expect(updateInput).to.be.a('function');
    });
});