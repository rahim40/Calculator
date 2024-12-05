var user=document.getElementById("mymain");

function calculator(newvalue){
    user.value+=newvalue
}
function deleteme(){
    user.value=""
}
function answer(){
    var a=eval(user.value)
    user.value=a
}