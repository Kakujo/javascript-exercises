const reverseString = function(phrase) {
    let reversePhrase = "";
    for (let i = phrase.length; i >= 0; i--) {
        reversePhrase += phrase.charAt(i);
    }

    return reversePhrase;
};

// Do not edit below this line
module.exports = reverseString;
