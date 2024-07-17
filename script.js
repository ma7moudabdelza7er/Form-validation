let userName = document.querySelector(".username");
let email = document.querySelector(".email");
let PasswordOne = document.querySelector(".password1");
let passwordTwo = document.querySelector(".password2");
let submit = document.querySelector(".submit");
// messages
let userNameMsg = document.querySelector(".user-msg");
let emailMsg = document.querySelector(".email-msg");
let passwordOneMsg = document.querySelector(".password1-msg");
let passwordTwoMsg = document.querySelector(".Password2-msg");

submit.addEventListener("click",function(e){
    if(userName.value === "" && email.value === "" && PasswordOne.value === "" && passwordTwo.value === ""){
        e.preventDefault();
        alert("Please fill all input")
    }
    if(userName.value === ""){
        showMessage(userNameMsg,"Please enter your Name","red");
    }else{
        showMessage(userNameMsg,"Success","green");
    }
    if(email.value === ""){
        showMessage(emailMsg,"Please enter your Email","red");
    }else{
        showMessage(emailMsg,"Success","green");
    }
    if(PasswordOne.value === ""){
        showMessage(passwordOneMsg,"Please enter your Password","red");
    }else{
        showMessage(passwordOneMsg,"Success","green");
    }
    if(passwordTwo.value.length !== PasswordOne.value.length){
        showMessage(passwordTwoMsg,"Password one not match two","red");
        e.preventDefault();
    }else{
        if(passwordTwo.value === ""){
            showMessage(passwordTwoMsg,"Please Confirm Password","red");
        }else{
            showMessage(passwordTwoMsg,"Success","green");
        }
    }
    

})
function showMessage(el,msg,color){
    el.style.visibility = "visible";
    el.textContent = msg;
    el.style.color = color;
    el.previousElementSibling.style.border = `2px splid ${color}`;
}