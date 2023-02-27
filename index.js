const Form =document.querySelector("form");
const email=document.querySelector("#email");
const emailErr=document.querySelector("#em-err");
const mobNum=document.querySelector("#mb-num");
const mbErr=document.querySelector("#mb-err");
const cntry=document.querySelector("#cntry-code")
Form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    aftersubmt()
})

function aftersubmt(){
    console.log("nk")
    let stat=true;
    let reg=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //reg taken from :-
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
    if(email.value===null||email.value===""){
        emailErr.innerText="required field";
        //Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.
        emailErr.classList.add("visible");
        emailErr.classList.add("error");
         stat= false;
    }
    else if(!reg.test(email.value)){
        emailErr.innerText="You Entered an Invalid Email Address";
        emailErr.classList.add("visible");
        emailErr.classList.add("error");
        stat=false;
    }
    else {
        // removing from list
        emailErr.classList.remove("visible");
    }
    if(mobNum.value===""||mobNum===null ){
            mbErr.innerText = "Required field";
            mbErr.classList.add("visible");
            mbErr.classList.add("error");
            stat = false;
    }
    //checking whether typed value is Number or not.
    else if(typeof(mobNum)==Number){
            mbErr.innerText = "Enter Only Number";
            mbErr.classList.add("visible");
            mbErr.classList.add("error");
            stat = false;
    }
    else if(mobNum.value.length<10 || mobNum.value.length>10){
            mbErr.innerText = "Number should be 10 digit";
            mbErr.classList.add("visible");
            mbErr.classList.add("error");
            stat = false;
    }
    else {
        mbErr.classList.remove("visible");
    }
    if(stat){
        localStorage.setItem("mail",JSON.stringify(email.value))
        localStorage.setItem("mbnum",JSON.stringify(mobNum.value))
        localStorage.setItem("cntryCode",JSON.stringify(cntry.value))
        
    }
}