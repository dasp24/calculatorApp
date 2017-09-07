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
        const op2 = {
            type: 'APPEND_VALUE',
            value: '2'
        };
        expect(updateInput(state, op).runningTotal).to.equal('.');
        expect(updateInput(state, op).runningTotal).to.equal('.');
        expect(updateInput(state, op2).runningTotal).to.equal('.2');
    });
    it('updates operand correctly', () => {
        const state = {
            runningTotal: '12',
            operation: '*',
            operand: '0'
        };
        const op = {
            type: 'APPEND_VALUE',
            value: '1'
        };
        const op2 = {
            type: 'APPEND_VALUE',
            value: '.'
        };
        expect(updateInput(state, op).operand).to.equal('1');
        expect(updateInput(state, op2).operand).to.equal('1.');
        expect(updateInput(state, op).operand).to.equal('1.1');
    });
});
describe('calculateTotal', () => {
    it('returns the total - case(+)', () => {
        expect(calculateTotal(2,'+',3)).to.equal(5);
        expect(calculateTotal(10,'+',10)).to.equal(20);
        expect(calculateTotal(0,'+',10)).to.equal(10);
        expect(calculateTotal(10,'+',0)).to.equal(10);
    });
    it('returns the total - case(-)', () => {
        expect(calculateTotal(2,'-',3)).to.equal(-1);
        expect(calculateTotal(10,'-',10)).to.equal(0);
        expect(calculateTotal(0,'-',10)).to.equal(-10);
        expect(calculateTotal(10,'-',0)).to.equal(10);
    });
    it('returns the total - case(*)', () => {
        expect(calculateTotal(2,'*',3)).to.equal(6);
        expect(calculateTotal(10,'*',10)).to.equal(100);
        expect(calculateTotal(0,'*',10)).to.equal(0);
    });
    it('returns the total - case(/)', () => {
        expect(calculateTotal(2,'/',4)).to.equal(0.5);
        expect(calculateTotal(10,'/',10)).to.equal(1);
        expect(calculateTotal(0,'/',10)).to.equal(0);
    });
});

describe('immediateExecute', () => {
    it('returns the total - case(%)', () => {
        expect(immediateExecute(50,'%')).to.equal(0.5);
        expect(immediateExecute(0.5,'%')).to.equal(0.005);
    });
    it('returns the total - case(+/-)', () => {
        expect(immediateExecute(2,'+/-')).to.equal(-2);
        expect(immediateExecute(-100,'+/-')).to.equal(100);
        expect(immediateExecute(2345,'+/-')).to.equal(-2345);
    });
    it('returns the total - case(c)', () => {
        expect(immediateExecute(2,'c')).to.equal(0);
        expect(immediateExecute(1010101,'c')).to.equal(0);
    });
});