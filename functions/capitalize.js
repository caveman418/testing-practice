export default function capitalize(str) {
    let split = str.toLowerCase().split('');
    split[0] = split[0].toUpperCase();
    return split.join('');
}