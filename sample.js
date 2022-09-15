function validate(){
    let name=document.getElementById("name");
    let password=document.getElementById("password");

    if(name.value=="")
     alert("Name can't be empty");
    if(password.value.length<8)
     alert("password should be more than 8 letters");
}