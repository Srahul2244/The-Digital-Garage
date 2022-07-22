document.querySelector("form").addEventListener("submit",sigFun)
    let arr=JSON.parse(localStorage.getItem("signin"))||[];
    function sigFun(event){
        event.preventDefault();
       let email=document.getElementById("email").value;
       let pass =document.getElementById("pass").value;
      
        let obj={
            email:email,
            pass:pass,
        }
    arr.push(obj)
    console.log(arr)
    localStorage.setItem("signin",JSON.stringify(arr))
    window.location.href="sign.html"
          
    }