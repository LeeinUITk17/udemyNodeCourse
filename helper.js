function countEvenNumbers(array) {
    const evenNumbers = array.filter(num => num % 2 === 0);
    return evenNumbers.length;
}

function sum(value1, value2) {
    return value1 + value2;
}

module.exports = {
    countEvenNumbers,
    sum
};

console.log("PROCESS: ", process);
