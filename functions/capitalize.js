export default function capitalize(str) {
    if (str == '' || typeof str != 'string') return '';
    let split = str.toLowerCase().split('');
    split[0] = split[0].toUpperCase();
    return split.join('');
}