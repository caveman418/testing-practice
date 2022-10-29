import {add, subtract, multiply, divide} from '../functions/calculator';

test('add: no input given', () => {
    expect(add()).toBe(0);
});

test('add: normal input', () => {
    expect(add(5, 10)).toBe(15);
});

test('add: invalid input', () => {
    expect(add('hello', 'world')).toBe('invalid input');
});

test('add: one value input', () => {
    expect(add(20)).toBe(20);
});

test('subtract: no input given', () => {
    expect(subtract()).toBe('invalid input');
});

test('subtract: normal input', () => {
    expect(subtract(10,15)).toBe(-5);
});

test('subtract: invalid input', () => {
    expect(subtract('hello', 'world')).toBe('invalid input');
});

test('subtract: one value input', () => {
    expect(subtract(12)).toBe('invalid input');
});

test('multiply: no input given', () => {
    expect(multiply()).toBe(1);
});

test('multiply: normal input', () => {
    expect(multiply(-5, 20)).toBe(-100);
});

test('multiply: one input value', () => {
    expect(multiply(21)).toBe(21);
});

test('multiply: invalid input', () => {
    expect(multiply('hello', 'world')).toBe('invalid input');
});

test('multiply: large input', () => {
    expect(multiply(1254351613211351235123515, 36136631513513511209513)).toBe(4.5328042034999825e+46);
});

test('divide: normal input', () => {
    expect(divide(60,6)).toBe(10);
});

test('divide: invalid input', () => {
    expect(divide('hello', 'world')).toBe('invalid input');
});

test('divide: no input', () => {
    expect(divide()).toBe('invalid input');
});

test('divide: one value input', () => {
    expect(divide(51)).toBe('invalid input');
});

test('divide: divide by zero', () => {
    expect(divide(51,0)).toBe('error: divide by 0');
});