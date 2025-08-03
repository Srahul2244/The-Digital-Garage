let sigAr=JSON.parse(localStorage.getItem("signin"))||[];;
// console.log(sigAr)
document.querySelector("form").addEventListener("submit",sigFu)
let logArr=JSON.parse(localStorage.getItem("sigUp"))||[]; 
function sigFu(event){
    event.preventDefault();
   let email=document.getElementById("email").value;
   let pass =document.getElementById("pass").value;
    let obj={
        email:email,
        pass:pass,
    }
    sigAr.forEach(function(ele){
        if(ele.email===obj.email&&ele.password===obj.password){
            localStorage.setItem("signUp",JSON.stringify(ele));
            alert("sign up Successful");
            window.location.href="index.html"
        }
    })
}
function funct(){
    window.location.href="register.html"
}
