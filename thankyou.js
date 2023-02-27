
document.addEventListener("DOMContentLoaded",function(){
    const email = JSON.parse(localStorage.getItem("mail"));
    const cntryCd = JSON.parse(localStorage.getItem("cntryCode"));
    const mob = JSON.parse(localStorage.getItem("mbnum"));
    apndData(email,cntryCd,mob)
})

function apndData(email,countryCode,mobile){
    console.log(email)
    document.querySelector("#email").innerText = email;
    document.querySelector("#countryCode").innerText = countryCode;
    document.querySelector("#mobile").innerText = mobile;
}