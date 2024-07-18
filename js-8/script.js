//console.log("working");

//Task 1
function fetchData() {
  return new Promise((resolve) => {
    let data = fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json)); //Task 1 - display data in console
  });
}
fetchData();

//Task 2
let fetchData1 = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    if (!response.ok) {
      throw new Error("HTTP error");
    }
    let data = await response.json();
    console.log(data); //
    showData(data);
  } catch (error) {
    console.log(error);
  }
};
fetchData1();

//to show data in dom
let showData = (data)=>{
let ul = document.createElement("ul");
document.body.appendChild(ul);

data.forEach((dataItem) => {
    let li = document.createElement('li');
    li.innerHTML = dataItem.title
    ul.appendChild(li);

});

}

//Task 3
document.addEventListener("DOMContentLoaded", () => {
  let fetchData2 = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("HTTP Error");
      }

      let data = await response.json();
      //console.log(data);
      displayData2(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  let displayData2 = (data) => {
    let tableBody = document.querySelector("#table-data tbody");
    
    //console.log(tableBody);
    //console.log(data);
    data.forEach((element) => {
      let table_row = document.createElement("tr");

      let id_content = document.createElement("td");
      id_content.textContent = element.id;
      table_row.appendChild(id_content);

      let name_content = document.createElement("td");
      name_content.textContent = element.name;
      table_row.appendChild(name_content);

      let email_content = document.createElement("td");
      email_content.textContent = element.email;
      table_row.appendChild(email_content);
      tableBody.appendChild(table_row);
    });
  };

  fetchData2();
});


//Task 4 - Error Handling in Asynchronous Code

document.addEventListener("DOMContentLoaded",()=>{
    let fetchData4 = async()=>{
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/u");
            
            let data = response.json();
    
        }catch(error){
            console.error("error",error);
        }
    }
    fetchData4();

})

//Task 5 Combining Fetch with Async/Await and Error Handling

async function fetchPosts(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("HTTP Error");
        }
        let data = response.json();
        console.log(data);
    }catch(error){
        console.error("Error",error)
    }
}fetchPosts();

