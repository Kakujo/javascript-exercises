const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }
    let sortedNumbers = [a,b].sort();
    let sum = 0;
    for (let i = sortedNumbers[0]; i <= sortedNumbers[1]; i++ ) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
