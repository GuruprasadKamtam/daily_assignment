
//console.log("working");

//task 1
let h1 = document.getElementById("h1-tag");
h1.style.backgroundColor = "red";
h1.style.fontSize = "30px";


//task 2

let p_Tag = document.getElementsByClassName('paragraph');
//console.log(p_Tag);

for(let i=0;i<p_Tag.length;i++)
    p_Tag[i].style.color = "brown";

//task 3

let h2_Tag = document.getElementsByTagName('h2');
for(let i=0;i<h2_Tag.length;i++){
    h2_Tag[i].style.border = "10px solid seagreen"
}



//task 4
let button_Tag = document.getElementsByTagName('button');

for(let i=0;i<button_Tag.length;i++){
button_Tag[i].style.border = "4px dashed aqua"
}

let ul_tag = document.querySelector('ul');
// console.log(ul_tag);

ul_tag.querySelector('#bootstrap').style.fontFamily =  "'Courier New', Courier, monospace";
ul_tag.querySelector('#bootstrap').style.fontStyle =  "italic";


//task 5

let span_Tag = document.querySelectorAll('.item');
span_Tag.forEach(function(element){
    element.style.margin = "50px";
    element.style.textTransform = "uppercase" ;// added some extra property
    element.style.fontStyle = "italic";
    element.style.color = "red";
})


//Task 6 

let q = document.getElementById('quote');
q.style.color="brown"
q.style.border = "2px dotted skyblue";
q.style.padding = "30px";
q.style.margin = "50px";
q.style.backgroundColor = "beige";

