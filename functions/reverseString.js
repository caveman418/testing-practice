export default function reverseString(str) {
    if (typeof str !== 'string') return 'invalid input';
    return str.split('').reverse().join('');
}