// Function to find the factorial of a number 

function factorial(num){
    let i;
    let fact = 1;
    for(i=1; i<=num; i++){
        fact = fact*i;
    }
    return fact;
}

let number = Number(prompt("Enter a number"));
alert(factorial(number));