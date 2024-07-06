//console.log("working");

//task 1- Generate a raondom number betwenn 1 to 100

function getRandomNumber(min,max){

    return (Math.floor(Math.random()*(max-min +1))+min);
    
}
let randomNumber = getRandomNumber(1,100);
console.log(randomNumber);


//task -2 round Numbers

function roundNumbers(num){
         return {
             roundedUp: Math.ceil(num),
             roundedDOwn: Math.floor(num),
             rounded: Math.round(num)
         };

}

console.log(roundNumbers(4.7));

//task 3 - fin max and min

function findMaxMin(numbers) {
   return {
    max: Math.max(...numbers),
    min: Math.min(...numbers) 
   };
  }
  
  console.log(findMaxMin([3, 5, 7, 2, 8])); 
  

  //task 4

  function calculatePowerAndSquareRoot(base, exponent) {
    return{
        power : Math.pow(base,exponent),
        squareRoot : Math.sqrt(base)
    }
  }
  
  console.log(calculatePowerAndSquareRoot(4, 3)); 
  

  //task 5


  function getCurrentDateTime() {
  
    let date = new Date().toLocaleDateString();
    
     let time = new Date().toLocaleTimeString();
    
    return{
        currentDate : `${date.split('/').reverse().join(':')}`,
        currentTime : `${time}`
    }
  }
  
  console.log(getCurrentDateTime());


  ///task 6

  function getDateMethods(date) {
    return{
      day : date.getDay(),
      month : date.getMonth() + 1,
      year : date.getFullYear()
    }
  }
  console.log(getDateMethods(new Date()));



  //task 7

  function formatDateInLocales(date) {
    return{
      enUs: date.toLocaleDateString('en-US'),
      frFR : date.toLocaleDateString('fr-FR')
    }
  }
  
  console.log(formatDateInLocales(new Date()));
  

  //Task - 8
  
function addDaysToDate(date, days) {
  return{
    date: (date.getDate() + days)
  }
}

console.log(addDaysToDate(new Date(), 5)); 

//Bonus task - 1

function exploreMathMethods(num) {
  return{
    abs : Math.abs(num),
    floort : Math.floor(num),
    ceil: Math.ceil(num),
    log: Math.log(num),
    exp: Math.exp(num)
  }
}

console.log(exploreMathMethods(-5));


//Bonus Task - 2
function advancedDateManipulations(date1, date2) {
  return{
    differenceInDays: Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24)),
    isEarlier: (date1<date2) ? true : false
  }
}

console.log(advancedDateManipulations(new Date('2024-01-01'), new Date('2024-12-31')));

  
  
  
  