const crypto = require('crypto');
function keygenerate(length) {
    //we store all the characters we need to generate our api key from.
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let key = "";
    /*
The for loop iterates over each byte and the modulo operator is used to determine the index and select a character from the chars variable that correspond to the index to store in the key variable
*/
    const random = crypto.randomBytes(length);
    for (let i = 0; i < random.length; i++) {

        let index = random[i] % chars.length;
        key += chars[index];
    }
    return key;
}

module.exports = {
    keygenerate
}
