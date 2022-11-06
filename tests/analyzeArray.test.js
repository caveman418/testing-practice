import analyzeArray from "../functions/analyzeArray";

test('empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
    });
});

test('normal array', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});

test('all zeros', () => {
    expect(analyzeArray([0,0,0,0,0,0,0,0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 8
    });
});

test('numbers as strings in array', () => {
    expect(analyzeArray(['1',2,'3',4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});

test('invalid input', () => {
    expect(analyzeArray(['a','b',21,23,'vba'])).toBe('invalid input');
});