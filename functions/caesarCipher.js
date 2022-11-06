export default function caesarCipher(str, offset) {
    offset = offset % 26;
    if (offset === 0) return str;

    let ans = '';

    for (let i=0; i<str.length; i++) {
        const charCode = str[i].charCodeAt();
        let newCode = charCode + offset;

        if (charCode >= 65 && charCode <= 90) {
            if (newCode <= 64) newCode += 26;
            if (newCode >= 91) newCode -= 26;
        } else if (charCode >= 97 && charCode <= 122) {
            if (newCode <= 96) newCode += 26;
            if (newCode >= 123) newCode -= 26;
        } else {
            newCode = charCode; //retain old code if special character
        }

        ans += String.fromCharCode(newCode);
    }

    return ans;
}

//65:  A
//90:  Z
//97:  a
//122: z