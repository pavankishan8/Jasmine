const app = require("../../src/mathModule");


describe('Unit Testing for MathComponent Module', () => {
    it('should add 2 numbers', () => {
        const input1 = 123;
        const input2 = 234;
        const expected = 357;

        const actual = app.addFunc(input1, input2);

        expect(actual).toBe(expected);
    });

    it('should sub 2 numbers', () => {
        const input1 = 123;
        const input2 = 234;
        const expected = -111;

        const actual = app.subFunc(input1, input2);

        expect(actual).toBe(expected);
    });

    it('should mul 2 numbers', () => {
        const input1 = 5;
        const input2 = 5;
        const expected = 25;

        const actual = app.mulFunc(input1, input2);

        expect(actual).toBe(expected);
    });

    it('should div 2 numbers', () => {
        const input1 = 24;
        const input2 = 2;
        const expected = 12;

        const actual = app.divFunc(input1, input2);

        expect(actual).toBe(expected);
    });

});
    