// Immediately invoked function expression

 
console.log(( (num)=> num*2)(4)); // Semicolons are necessary to stop the context of the IIFE

(()=> console.log("I'm IIFE"))();