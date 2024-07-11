//console.log("working");

//Task 1: Creating and Appending an Element

const div = document.createElement("div");
console.log(div);
div.setAttribute('title','myTitle');
div.style.color = "red";
div.style.fontSize = "30px"
const text = document.createTextNode("Hello, World!");
div.appendChild(text);

document.body.appendChild(div);

//Task 2: Changing the Content of an Existing Element

let p = document.querySelector('p');
p.innerHTML = "This is changed content"


//Task 3: Creating and Appending a List of Items

let ul = document.createElement('ul');
console.log(ul);


function addItems(items){
    let li = document.createElement('li');
    li.innerHTML = `${items}`;
    li.style.listStyleType = "circle";
    ul.append(li);
    document.body.appendChild(ul);
}
addItems('Item 1');
addItems('Item 2');
addItems('Item 3');


//Task 4
let img = document.querySelector('img');
// console.log(img);
img.setAttribute('src',"https://thumbs.dreamstime.com/b/biks-super-bike-yamaha-r-yzf-83478007.jpg");
img.setAttribute('width','200px');

//Task 5
let removeTag = document.querySelector('#remove');
console.log(removeTag);
removeTag.remove();


//Reflection Questions

// 1. What did you learn about DOM manipulation through this task?
//--> Through this dom manipulation task I learnt how to create an elements dynamically using javascript and also learnt how to display the newly created elements on the dom i.e. viewport.

// 2. How do you create and append elements in the DOM?
//--> To create an element, i have used document.createElement() function which create a new element and to append it on to the 
//dom I have used appendChild() function which appends the Element on to the dom.
//--> If we want to append it in between the body then use document.body.appendChild() as body is the parent element of the whole html document but if we want to append it in between other tags then we should target is using that tag.
//--> In line no.31 i have used ul.append(li) so it adds an li inbetween ul. 
//--> In line no. 32 i have used document.body.appendChild(ul) here i am appending ul to the body.

//3. What methods are used to change content and attributes of DOM elements?
//--> To change the contents dynamically we have 3 different methods innerText,innerHTML,textContent.
//--> To set attributes setAtribute('attr name','property') is used. eg. setAttribute('title',"my javascript");
// here, title is the attribute name and "my javascript" is content.

//4. How do you delete elements from the DOM?
//--> To delete an elements from the dom, remove() method is used.