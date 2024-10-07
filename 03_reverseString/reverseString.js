const reverseString = function(str) {
    const strLetters = str.split("");
    const strLen = strLetters.length;
    let resultStr = "";

    for (let i = strLen - 1; i >= 0; i--){
        resultStr += strLetters[i];
    }
    return resultStr;
};

// Do not edit below this line
module.exports = reverseString;
