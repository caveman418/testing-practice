export default function caesarCipher(str, offset) {
    offset = offset % 26;
    if (offset === 0) return str;

    let ans = '';

    for (let i=0; i<str.length; i++) {
        const charCode = str[i].charCodeAt();
        let newCode = charCode + offset;

        if (charCode >= 65 && charCode <= 90) {
            if (newCode <= 64) newCode = 90 - (64 - newCode);
            if (newCode >= 91) newCode = 65 + (newCode - 91);
        } else if (charCode >= 97 && charCode <= 122) {
            if (newCode <= 96) newCode = 122 - (96 - newCode);
            if (newCode >= 123) newCode = 97 + (newCode - 123);
        } else {
            newCode = charCode; //retain old code if special character
        }

        ans += String.fromCharCode(newCode);
    }

    return ans;
}

//64:  A
//89:  Z
//96:  a
//121: z