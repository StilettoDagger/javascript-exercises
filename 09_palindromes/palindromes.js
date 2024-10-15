const palindromes = function (str) {
    let reversedStr = "";

    let charTest = /[a-zA-Z0-9]/g;

    const characters = str.match(charTest);
    
    for (let i = characters.length - 1; i >= 0; i--)
        {
            reversedStr += characters[i];
    }

    const alphaStr = characters.join("")

    return reversedStr.toLowerCase() == alphaStr.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
