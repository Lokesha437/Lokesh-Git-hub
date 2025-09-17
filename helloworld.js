/*function even(e){
    if (e%2==0){
        return true
    } else {
        return false
    }
} 
console.log(even(4)) 
console.log(even(5))
console.log(even(0))
console.log(even(-4))
console.log(even(-5))*/      

/*let n=4;
function factorial(n){
    if (n<=1){
        return 1
    } else {
        return n*factorial(n-1)
    }
}
console.log(factorial(n))  
console.log(factorial(0))  
console.log(factorial(1))  
console.log(factorial(5))

console.log(factorial(6))  
console.log(factorial(7))  
console.log(factorial(8))  
console.log(factorial(9))  
console.log(factorial(10))*/

/*for (let i=1; i<=10; i++){
    console.log("Looped Number:",i)
}*/

// let a=5
// let b=10
// let sum = a + b
// console.log("Sum:",sum)

// let val=2
// switch (val){
//     case 1:
//         console.log("Value is 1")
//         break;
//     case 2:
//         console.log("Value is 2")
//         break;
//     case 3:
//         console.log("Value is 3")
//         break;
// }



const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    num1=Number(num1);
    num2=Number(num2);
    let sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    rl.close();
  });
});
