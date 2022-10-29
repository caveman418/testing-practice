export function add(a = 0, b = 0) {
    if (typeof a !== 'number' || typeof b !== 'number') return 'invalid input';
    return a + b;
}

export function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || !a || !b) return 'invalid input';
    return a - b;
}

export function multiply(a = 1, b = 1) {
    if (typeof a !== 'number' || typeof b !== 'number') return 'invalid input';
    return a * b;
}

export function divide(a, b) {
    if (b === 0) return 'error: divide by 0';
    if (a === 0) return 0;
    if (typeof a !== 'number' || typeof b !== 'number' || !a || !b) return 'invalid input';
    return a / b;
}