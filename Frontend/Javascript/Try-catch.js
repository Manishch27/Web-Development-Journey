let Name = String(prompt("Enter your Name : "));

setTimeout(()=>{
    console.log(`${Name} Hacking start`);
}, 2000);

try{
    console.log(hack);
}

catch(err){
    console.log(err);
};

// Don't do

// try{
//     setTimeout(()=>{
//         try{
//             console.log(hack);
//         }

//         catch(err){
//             console.log(err);
//         }

//     },1000);
// }
// catch(err){
//     console.log(err);
// }

setTimeout(()=>{
    console.log("Hacking is in Progress......");
}, 3000);

setTimeout(()=>{
    console.log(`${Name} Your Server got hacked!`)
}, 4000);

