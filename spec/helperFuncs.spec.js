const {
    expect
} = require('chai');

const {
    operation,
    updateInput,
    calculateTotal,
    immediateExecute
} = require('../src/redux/helperFuncs');

describe('helper functions - operation, updateInput, calculateTotal and immediateExecute', () => {
    it('exists', () => {
        expect(operation).to.be.a('function');
        expect(updateInput).to.be.a('function');
        expect(calculateTotal).to.be.a('function');
        expect(immediateExecute).to.be.a('function');
    });
});

describe('operation', () => {
    it('operation changes operation correctly', () => {
        const state = {
            runningTotal: '0',
            operation: null,
            operand: '0',
        };
        const op = {
            type: 'SET_OPERATION',
            operation: '*'
        };
        const op2 = {
            type: 'SET_OPERATION',
            operation: '/'
        };
        const op3 = {
            type: 'SET_OPERATION',
            operation: '+'
        };
        const op4 = {
            type: 'SET_OPERATION',
            operation: '-'
        };
        expect(operation(state, op).operation).to.equal('*');
        expect(operation(state, op2).operation).to.equal('/');
        expect(operation(state, op3).operation).to.equal('+');
        expect(operation(state, op4).operation).to.equal('-');
    });
    it('doesnt change operation if standard values arent sent', () => {
        const state = {
            runningTotal: '0',
            operation: null,
            operand: '0',
        };
        const op = {
            type: 'SET_OPERATION',
            operation: 'anything else'
        };
        expect(operation(state, op).operation).to.equal(null);
    });
});

describe('updateInput', () => {
    it('updates running total correctly - numbers', () => {
        const state = {
            runningTotal: '0',
            operation: null,
            operand: '0'
        };

        const op = {
            type: 'APPEND_VALUE',
            value: '1'
        };
        const op2 = {
            type: 'APPEND_VALUE',
            value: '9'
        };
        expect(updateInput(state, op).runningTotal).to.equal('1');
        expect(updateInput(state, op).runningTotal).to.equal('11');        
        expect(updateInput(state, op2).runningTotal).to.equal('119');
    });
    it('updates running total correctly - .', () => {
        const state = {
            runningTotal: '0',
            operation: null,
            operand: '0'
        };
        const op = {
            type: 'APPEND_VALUE',
            value: '.'
        };
        expect(updateInput(state, op).runningTotal).to.equal('.');
        
    });
});