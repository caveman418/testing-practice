export default function analyzeArray(arr) {
    arr = arr.map(x => Number(x));
    if (!arr.every(x => !isNaN(x))) return 'invalid input';

    let average = 0, min = 0, max = 0;

    let length = arr.length;

    if (length > 0) {
        average = arr.reduce((prev, cur) => prev + cur) / length;
        min = Math.min(...arr);
        max = Math.max(...arr);
    }

    return {
        average,
        min,
        max,
        length
    }
}