import reverseString from "../functions/reverseString";

test('one word', () => {
    expect(reverseString('test')).toBe('tset');
});

test('empty string', () => {
    expect(reverseString('')).toBe('');
});

test('multiple words', () => {
    expect(reverseString('the blue chicken')).toBe('nekcihc eulb eht');
});

test('mixed capital letters and punctuation', () => {
    expect(reverseString('The OraNGE cOw.')).toBe('.wOc EGNarO ehT');
});

test('non-string input', () => {
    expect(reverseString(34)).toBe('invalid input');
});