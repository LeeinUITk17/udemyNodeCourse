//console.log("PROCESS:",process);
 const helper=require('./helper');
// const total=helper.sum(3231,3123);
// console.log("Total:",total);

const readline=require('readline')
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserInput(){
    rl.question('enter numbers seperated by spaces: ',input=>{
        const numbers=input.split(' ').map(Number);
        const evennumber=helper.countEvenNumbers(numbers);
        console.log('the number of even number is: '+evennumber);
        rl.close();
    });
}
handleUserInput();