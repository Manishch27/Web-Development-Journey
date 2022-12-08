let arr = [1,2,3,4,5];
console.log(arr);
console.log(`The length of the array = ${arr.length}`);

arr[5] = 7; // Adding a new element in an array
arr[5] = 6; // Change the value of an array element

// Print array elements one by one through for loop
console.log("<------- Elements present in the array are -------> ");
for(i=0; i<arr.length; i++){
  console.log(arr[i]);
}

// Array Methods

// 1 - toString =  Used to convert a number array elements into string

let numbers = [1,2,3,4,5];
let b = numbers.toString();
console.log(b, typeof(b));

// 2 - Join() = Use to add some extra symbols or characters between array elements

let numbers = [1,2,3,4,5];
let c = numbers.join('->');
console.log(c)

// 3 - pop() = use to delete the last item from an array

let cars = ['Audi', 'BMW', 'lembo'];
console.log(cars.pop());
console.log(cars);

// 4 - push() = use to add an element at the end of the array

let bikes = ['KTM', 'Hayabusa', 'Ducati', 'Harley'];
console.log(bikes.push("Royal Enfield")); // pop function directly made changes on the real array
console.log(bikes);

// 5 - shift() = use to delete an element at the beginning of the array

let bikes1 = ['KTM', 'Hayabusa', 'Ducati', 'Harley'];
console.log(bikes1.shift());
console.log(bikes1);

// 6 - unshift() = use to add an element at the beginning of the array

let topCompanies = ["Amazon","Apple","Netflix","Google"];
console.log(topCompanies.unshift("Meta"));
console.log(topCompanies);

// 7 - delete = use to delete an item from Nth index of the array , but the length of the array will not be change

let arr = [1,2,3,4,5];
delete arr[2]; // The item on the second index will be delete and undifined will be store there

console.log(arr); 
console.log(typeof(arr[2]); // The typeof arr[2] will be undifined

// 8 - Concat() = concatenate more than 1 array's elements in a new array

let sectionA = [];
let sectionB = [];
let sectionC = [];

let studentsA = Number(prompt("Enter the number of students in section A"));

for(let i = 0 ; i<studentsA; i++){
  sectionA[i] = prompt(`Enter the sections A's ${i+1} student's name`);
}


let studentsB = Number(prompt("Enter the number of students in section B"));

for(let i = 0; i<studentsB; i++){
    sectionB = prompt(`Enter the section B's ${i+1} student's name`);
}

let studentsC = Number(prompt("Enter the number of students in section c"));

for(let i = 0; i<studentsC; i++){
  sectionC[i] = prompt(`Enter the  section C's ${i+1} student's name`);
}

console.log(`All students in all three sections are ${sectionA.concat(sectionB, sectionC)}`);

for(let i = 0; i<studentsC; i++){
  console.log(sectionC[i]);
}

// 9 - sort() = Use to sort array elements alphabatically

let numList = [2, 9, 4, 8, 1, 3];
let numList1 = [21, 5, 11, 90, 256, 100];
numList.sort();
numList1.sort();
console.log(numList);
console.log(numList1);  // It is showing [100, 11, 21, 256, 5, 90] because it doesn't sort numbers in any order it shorts them according to what digits in that number

// We have another way to sort numbers in an order - Let's see it

let Compare = (a , b) => { // Compare function to reverse the array elements
  return a-b;
}

let numbers = [701, 46, 964, 0, 54];
numbers.sort(Compare);
console.log(numbers);

// 10 - reverse() = reverse the array elements

let numbers = [1,2,3,4,5];
numbers.reverse();
console.log(numbers);

// 11 - splice() - Replace a range of items with new items

let arr = [10, 15 , 18, 21, 22];
let deletedItem = arr.splice(1, 1, 11, 12, 13, 14, 15);
console.log(deletedItem);
console.log(arr);

// 12 - slice() - Delete a range of items from an array

let arr = [10, 20, 30, 40, 50];
let newArr = arr.splice(1);
console.log(newArr);
console.log(arr);