//console.log("working");

//Task 1

setTimeout(() => {
        console.log("Hello, world!");
}, 3000);

//Task 2
let count = 0;
let clear = setInterval(() => {
    
    console.log("Tick");
    if(count<4){
        count = count + 1;
        //console.log(count);
        
    }
    else{
        clearInterval(clear);    //Task 3
    }
}, 2000);

//task 4
let greet = (name)=>{
    console.log("Hello", name);
}

//greet("guru!");

function processUserInput(greet){
    console.log("welcome");
    greet("Guruprasad!");
}
processUserInput(greet);

//Task 5
function mainFunction(callback){
        //console.log("hello");
        setTimeout(() => {
            callback("hello");    
        }, 2000);
        setTimeout(() => {
            callback("world!!!");    
        }, 2000);
    }   
    
    function callbackFunction(msg) {
        console.log(msg);
    }
    
    mainFunction(callbackFunction);
    

//Reflection Questions

//1. What did you learn about JavaScript timing events and callbacks through this
//task?
// --> In javascript timing event, I learnt how to use proper wep apis using setInterval() and setTimeout().
// --> In setInterval() it takes anynomous function and time in milli seconds to execute the function after some intervals of time.
// --> eg. setInterval(()=>{
        //code goes here
    //},1000);
// --> The code is executed after 1000 milliseconds continuously //

//-> setTimeout()  it takes anynomous function and time in milli seconds to execute the function after some milliseconds.
// --> eg. setTimeout(()=>{
        //code goes here
    //},1000);
// --> The code is executed after 1000 milliseconds//

//-->In callback function I learnt how to pass function as an argument to another function.
//--> A function which takes another function as an argument is a callback function.

//2. How do setTimeout and setInterval differ in their usage?
//--> The setTimeout() will execute after particular milliseconds but in setInterval() as the name suggets the code executes
// after some time intervals continuously until the memory is full or we can use clearInterval() function.

//3. What are the advantages of using callbacks in JavaScript?
//--> using callbacks it helps to make async events.
//--> using callbacks it doesnt block main thread of execution.


