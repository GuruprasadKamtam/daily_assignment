console.log("working");
//Task 1. localStorage: Setting and Getting Data

localStorage.setItem("name","Guruprasad");
localStorage.setItem("contact","1111111111");

console.log(localStorage.getItem("name"));

//2. sessionStorage: Setting and Getting Data
sessionStorage.setItem("name","John");
sessionStorage.setItem("email","John@gmail.com");
console.log(sessionStorage.getItem("name"));


//3. Removing Items from Storage
localStorage.removeItem("contact");
console.log(localStorage.getItem("contact"));

sessionStorage.removeItem("email");
console.log(sessionStorage.getItem("email"));

//4. JSON Storage
let obj = {
    course_name: "javascript",
    course_Id: 123
}

let obj1 = {
    brand_name: "Mercedez",
    model_name: "Benz"
}
localStorage.setItem("obj",JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("obj")));

sessionStorage.setItem("obj1",JSON.stringify(obj1));
console.log(JSON.parse(sessionStorage.getItem("obj1")));

//5. Clearing Storage
localStorage.clear();
sessionStorage.clear();

console.log(localStorage.getItem("obj"));
console.log(sessionStorage.getItem("obj1"));

//Reflection Questions
//● What did you learn about using localStorage and sessionStorage in JavaScript?
//--> The localStorage and sessionStorage are the web api.
//--> This storages store the data in the form of key and value pairs in string format.
//--> Local storage and session storages have setItem() to store the data and getItem() to get the values of the key.

// ● How does storing data in localStorage differ from sessionStorage?
//--> Local storage stores the data and the data is not cleared or removed unti the developers clears the data
//--> while in session storage as the name suggests it stores data for particular session until the user closes the 
//--> tabs or windows in the browser. when the user closes the data is automatically removed or cleared.
