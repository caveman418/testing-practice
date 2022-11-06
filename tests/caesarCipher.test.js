import caesarCipher from "../functions/caesarCipher";

test('multi-word input', () => {
    expect(caesarCipher('normal input', 1)).toBe('opsnbm joqvu');
});

test('capitalization and punctuation', () => {
    expect(caesarCipher('Normal input!', 1)).toBe('Opsnbm joqvu!');
});

test('special characters', () => {
    expect(caesarCipher('@#%@abc()*', 1)).toBe('@#%@bcd()*');
});

test('large number', () => {
    expect(caesarCipher('abcdefg', 27541716)).toBe('uvwxyza');
});

test('no input', () => {
    expect(caesarCipher('', 214)).toBe('');
});

test('numbers in input', () => {
    expect(caesarCipher('123a456', 5)).toBe('123f456');
});

test('0 input', () => {
    expect(caesarCipher('12sdf1!@%asdfADBGA', 0)).toBe('12sdf1!@%asdfADBGA');
});