import capitalize from '../functions/capitalize';

test('all lower case', () => {
    expect(capitalize('matthew')).toBe('Matthew');
});

test('all upper case', () => {
    expect(capitalize('MATTHEW')).toBe('Matthew');
});

test('mixed case', () => {
    expect(capitalize('MaTtHeW')).toBe('Matthew');
});

test('blank string input', () => {
    expect(capitalize('')).toBe('');
});

test('non-string input', () => {
    expect(capitalize(52)).toBe('');
});

test('multiple words input', () => {
    expect(capitalize('the pUrplE monKey')).toBe('The purple monkey');
});