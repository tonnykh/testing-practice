const caeserCipher = (strings) => {
    let character = '';
    let newString = '';
    const shift = 1; // shift number

    for (let i = 0; i < strings.length; i++) {
        character = strings.charAt(i);

        if (isLetter(character)) {
            if (character == character.toUpperCase()) {
                if(character == 'Z') {
                    newString += 'A';
                } else {
                    newString += characterShift(character, shift);
                }
            } else if (character == character.toLowerCase()) {
                if(character == 'z') {
                    newString += 'a';
                } else {
                    newString += characterShift(character, shift);
                }
            }
        } else {
            newString += character;
        }
    }
    return newString;
};


function isLetter(char) {
    return char.toLowerCase() != char.toUpperCase();
}

function characterShift(char, num) {
    return String.fromCharCode(char.charCodeAt() + num);
}

module.exports = caeserCipher;