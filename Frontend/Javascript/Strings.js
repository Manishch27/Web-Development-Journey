// Program 1 - traverse a string

let name = String('Manish');
for(let i = 0; i<name.length; i++){
  console.log(name[i]);
}

// Sequence Escape Characters;

let str = 'Don\'t do this';
  console.log(str);

// String template literal

// let Name = "Manish";
// let Friend = "Vivek";
// console.log(`${Name} is friend of ${Friend}`);


// String Methods
// Method 1 - toUpperCase

// let Name = prompt("Enter your name : ");
// console.log(Name.toUpperCase());
// console.log(Name); // There will be no effect on the actual name because strings are immutable in JavaScript

// Method 2 - toLowerCase

// let Name = prompt("Enter your Name in Upper Case Letters : ");
// console.log(`Your name in Lower Case Letters is ${Name.toLowerCase()}`);

// Method 3 - Slice

// let Name = prompt("Enter your name ");
// console.log(Name.slice(2, 5)); // 5th element not included

//  Mehtod 4 - Replace

// let Name = prompt("Enter your name ");
// console.log(Name);
// Name = Name.replace("Kumar", "Chaudhary");
// console.log(Name);

// Method 5 - Concatenate

let firstName = prompt("Enter your first name ");
let lastName = prompt("Enter your last name ");
console.log(firstName.concat(" "+lastName));

// Method 6 - Trim

let Name = prompt("Enter your Name ");
console.log(Name.trim());