//console.log("working");

//Task 1 - Shallow Copy

let user1 = {
    id: 1,
    name: "Guruprasad",
    email: "guruprasadkamtam@gmail.com",
    address:{
        street : "jntu",
        city : "hyderabad",
    },
    geo :{
        lat : 12345,
        lng : 7891
    }
}
//console.log(user);

let user2 = Object.assign(user1);
user2.address = "kphb colony";
user2["role"] = "software engineer";

console.log(user1);
console.log(user2);

//Task 2 - Deep Copy

const obj1 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.cars[0].price = 10000;
obj2.cars[1].price = 20000;
obj2.cars[2].price = 30000;

console.log(obj1);
console.log(obj2);

//Using Spread Operator
//Task1- Spread in Arrays

const arr1 = [1,2,3,4,6];
const arr2 = [72,98,26,45,67];
let arr3 = [...arr1,...arr2];
console.log(arr3);

//Task2-  Spread in Objects
let object1 = {
    name:"guru",
    age: 25,
    contact : 123456
}
let object2 = {
    gender: "male",
    city:"solapur",
    zip: 1234562
}

let object3 = {...object1,...object2};
console.log(object3);

//Using Rest Operator
//1. Rest in Functions

let sum = (...numbers)=>{  //rest operation when it is passed in parameters
    return numbers.reduce((preVal,currVal)=> preVal+currVal,0)    
}
console.log(sum(1,2,3,4,5)); 
console.log(sum(10,22,35,45,55,2,1,-21,-100)); 
console.log(sum(1,2,3)); 

//2. Rest in Array Destructuring

//const array = [9,5,4,7,1];
let [a,b,...array] = [9,5,4,7,1];
console.log(a);  
console.log(b);  
console.log(...array);


//Reflection Questions
//1. What did you learn about shallow and deep copying through this task?
//--> Shallow copy is created using spread operator and if any changes are made to any 1 object then it will reflect
//to two objects as they are pointing to the same memory location.
//--> Deep copy - To create a deep copy of an object we need to first convert the object into string using JSON.strginfigy(),
//it converts the object to string and then we use JSON.parse() which converts string objects to objects.
//By using deep copy , two objects are created differently and they point to two different memory locationa and if any 
//changes are made to any of the object then only that particular object is changed.

//2. How do the spread and rest operators simplify working with arrays and objects in JavaScript?
//--> The spread and rest operators are same working with arrays and objects.
//--> The spead operator for arrays is used in [] brackets and for objects is used in {}.

//3. What are the main differences between shallow and deep copies?
//--> The main difference netween shall and deep copy is that in shallow copy same memory location is shared between the objects
// but in deep copy every object has its own memory location.
//The changes mades for an object which is shallow copy will affect to both the objects as they share the same memory
//But in deep copy changes made to an oject affect only on that particular object.

//4. In what scenarios would you prefer using the rest operator in functions?
//--> THe rest operator is used when we are passing parameters in function.