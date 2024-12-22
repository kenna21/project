const Math = require('../src/Math');

describe('Math', () => {
    const math = new Math();

    test('adds two numbers correctly', () => {
        expect(math.add(2, 2)).toBe(4);
    });

    test('subtracts two numbers correctly', () => {
        expect(math.subtract(2, 2)).toBe(0);
    });
});
