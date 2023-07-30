// Map, Filter and reduce are the higher order function

// Map Function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mapArr = arr.map((currElem) => {
    return currElem * 2;
    }
);

console.log(mapArr); 

// Filter Function

const filterData = arr.filter((num)=>num%2==0);  // Even numbers 

console.log(filterData);

// Reduce Function

const reduceArr = arr.reduce((acc, num)=>acc+num, 0);
console.log(reduceArr);