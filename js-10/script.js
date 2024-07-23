console.log("working");

// const regex = /hello/g;

// let text = "hello hello hi how are you ???";

// console.log(text.replace(regex,"hi"));

let getForm = document.querySelector("#registration_form");
getForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("submit clicked");

    document.querySelector("#name").textContent = "";
    document.querySelector("#email").textContent = "";
    document.querySelector("#contact_No").textContent = "";
    document.querySelector("#password").textContent = "";
    document.querySelector("#conform_password").textContent = "";

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let contact_No = document.querySelector("#contact_No").value;
    let password = document.querySelector("#password").value;
    let conform_password = document.querySelector("#conform_password").value;


    let nameError = document.querySelector("#name_span");
    let emailError = document.querySelector("#email_span");
    let contactError = document.querySelector("#contact_span");
   let passwordError =  document.querySelector("#password_span");
   let conform_passwordError =  document.querySelector("#conform_password_span");

   nameError.style.display = "none";
   emailError.style.display = "none";
    contactError.style.display = "none";
   passwordError.style.display = "none";
   conform_passwordError.style.display = "none";
   
   document.querySelector("#name").style.border = "none";
   document.querySelector("#email").style.border = "none";
   document.querySelector("#contact_No").style.border = "none";
   document.querySelector("#password").style.border = "none";
   document.querySelector("#conform_password").style.border = "none";

    let namePattern = /^[a-zA-Z_]{3,}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let contactPattern = /^[0-9]{10,10}$/;

    let isValid = true;

    if(!namePattern.test(name)){
        document.querySelector("#name_span").textContent = "Username must contains min 3 characters.Please Enter valid Name";
        nameError.style.display = "block"
        document.querySelector("#name").style.border = "1px solid red";
        document.querySelector("#name").style.borderLeftWidth = "10px";
        isValid = false;
    }
    if(!emailPattern.test(email)){
        document.querySelector("#email_span").textContent = "Please Enter Valid Email ";
        emailError.style.display = "block"
        document.querySelector("#email").style.border = "1px solid red";
        document.querySelector("#email").style.borderLeftWidth = "10px";
        isValid = false;
    }
    if(!contactPattern.test(contact_No)){
        document.querySelector("#contact_span").textContent = "Contact No must contains 10 digits. Please Enter Valid Contact Number";
        contactError.style.display = "block";
        document.querySelector("#contact_No").style.border = "1px solid red";
        document.querySelector("#contact_No").style.borderLeftWidth = "10px";
        isValid = false;
    }
    if(!passwordPattern.test(password)){
        document.querySelector("#password_span").textContent = "Password must contains min 8 characters. Please Enter Valid Password";
      passwordError.style.display = "block";
      document.querySelector("#password").style.border = "1px solid red";
        document.querySelector("#password").style.borderLeftWidth = "10px";
        isValid = false;
    }
    if(!passwordPattern.test(conform_password) && !conform_password.match(password)){
        document.querySelector("#conform_password_span").textContent = "password must matches";
        conform_passwordError.style.display = "block";
        document.querySelector("#conform_password").style.border = "1px solid red";
        document.querySelector("#conform_password").style.borderLeftWidth = "10px";
        isValid = false;
    }

    if(isValid === true){
        let div_tag = document.querySelector("#registration_details");
        div_tag.innerHTML = `
        <div class="card shadow-lg">
            <div class="card-header bg-warning text-white">
                <h2>User Details</h2>
            </div>
            <div class="card-body">
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Contact No: ${contact_No}</p>    
            </div>
        </div> `;

        
        getForm.reset();
        alert("registration successful");
    }
});

let flag = false;
let button = document.querySelector("#darkMode");
//console.log(button);
button.addEventListener("click",()=>{
    if(flag === true){
        document.body.style.backgroundColor = "lightsteelblue";
        flag=false;
    }else{
        document.body.style.backgroundColor = "white";
        flag=true;
    }
})

let password = document.querySelector("#password");
//console.log(password);
let toggleButton = document.querySelector("#password_btn")
//console.log(toggleButton);
toggleButton.addEventListener("click",()=>{
    let typeAttr = password.getAttribute("type");
    //console.log(typeAttr);
    if(typeAttr === "password"){
        password.setAttribute("type","text");
    }
    else{
        password.setAttribute("type","password");

    }
})
let conform_password = document.querySelector("#conform_password");
//console.log(password);
let conform_toggleButton = document.querySelector("#conform_passwordbtn")
//console.log(toggleButton);
conform_toggleButton.addEventListener("click",()=>{
    let typeAttr = conform_password.getAttribute("type");
    //console.log(typeAttr);
    if(typeAttr === "password"){
        conform_password.setAttribute("type","text");
    }
    else{
        conform_password.setAttribute("type","password");

    }
})
