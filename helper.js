function sum(value1, value2) {
    return value1 + value2;
}

function countEvenNumbers(array) {
    const evenNumbers = array.filter(num => num % 2 === 0);
    return evenNumbers.length;
}

module.exports = {
    sum
};
module.exports={
    countEvenNumbers
};
console.log("PROCESS: ",process);