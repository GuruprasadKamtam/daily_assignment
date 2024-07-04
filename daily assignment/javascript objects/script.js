//Task 1 creating an object

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    owner:{
        firstName: "Jane",
        lastName: "Smith",
        age: 28,
        email: "jane.smith@example.com"
    }
}


//2. accessing object properties
console.log(car.make);
console.log(car.model);
console.log(car.year);

console.log(car.owner.firstName);
console.log(car.owner.lastName);
console.log(car.owner.age);
console.log(car.owner.email);

//3. modifying object properties

car.year = 2021;
car.owner.email = "jane2021.smith@example.com"

console.log(car);

//4. adding new properties to an object

car.insurance = {
    provider: "Geico",
    policyNumber:"XYZ1234567",
    expiryDate: "2024-12-31"
}
console.log(car);

//5. removing properties from an object

delete car.owner.email;
console.log(car);

//6.adding nested objects

car.serviceHistory = [
    {
      date: "2021-06-01",
      service: "Oil change",
      cost: 50
    },
    {
      date: "2022-01-15",
      service: "Tire rotation",
      cost: 100
    }
  ]
  
  console.log(car);

//7. print using for..in loop



for (const key in car) {
    console.log(car[key]);
}

//Bonus task

//task 1 using object.keys()
let keys = Object.keys(car);
console.log(keys);

//task 2
let values = Object.values(car);
console.log(values);

