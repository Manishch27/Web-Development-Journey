//  Guess a  random number game

let guessedNum = Number(prompt("guess a number between 0 to 100 : "));
let randomNum =  Math.floor(Math.random()* 100);

if(guessedNum==randomNum){
    alert("Yay! your guess is correct");
}

else if(guessedNum!=randomNum && guessedNum<=100 && guessedNum>=0){
    alert(`oh! you just missed, ${randomNum} was correct` );
}

else{
    alert("please! enter a number which is less than  100 and greater than 0");
}