import { fibonacci } from './fakultet.js'; // Import the fibonacci function

describe('Fibonacci Function', () => {
    test('fibonacci(1) should return 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci(2) should return 1', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('fibonacci(3) should return 2', () => {
        expect(fibonacci(3)).toBe(2);
    });

    test('fibonacci(5) should return 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('fibonacci(10) should return 55', () => {
        expect(fibonacci(10)).toBe(55);
    });
});
