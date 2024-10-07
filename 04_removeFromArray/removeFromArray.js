const removeFromArray = function(arr, ...args) {
    const newArr = arr.filter(element => !args.includes(element));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
