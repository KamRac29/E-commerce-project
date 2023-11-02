function validateForm(){
let name = document.querySelector('.name').value;
let email= document.querySelector('.email').value;
let subject= document.querySelector('.subject').value;
let message=document.querySelector('.message').value;
let re = /^([a-z]{3,})$/;
let reEmail=/^\S+@\S+\.\S+$/;
if( name == "") {
    alert("Please fill out name ");
    return false;
 } else if (re.test(name)== false){
    alert("Invalid name");
    return false;
 }


if(email == "" ) {
    alert("Please fill out email input");
    return false;
}   else if (reEmail.test(email) == false){ 
    alert("Invalid email");
  return false;
}

if(subject == "") {
    alert("Please fill out subject");
    return false;
}

if (message == ""){
    alert("Please fill out message input");
    return false;
 }


}