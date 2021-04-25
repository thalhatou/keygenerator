const crypto = require('crypto');
function generateKey(length) {
    //we store all the characters we need to generate our api key from.
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let key = "";
    /*
The for loop iterates over each byte and the modulo operator is used to determine the index abd select a character from the chars variable that correspond to the index
*/
    const random = crypto.randomBytes(length);
    for (let i = 0; i < random.length; i++) {

        let index = random[i] % chars.length;
        key += chars[index];
    }
    return key;
}

module.exports = {
    generateKey
}
