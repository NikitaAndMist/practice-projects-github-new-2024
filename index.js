
const logBtn = document.getElementById("button");
const rememberMeCheck = document.getElementById("checkbox");

logBtn.onclick = function(){
    if(rememberMeCheck.checked){
        window.alert("We will save your login to your Google Account!")
    }
}