let result=0
let num1 =  document.getElementById("div1")
function one(){
    let a1=1+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function two(){
    let a1=2+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function three(){
    let a1=3+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function four(){
    let a1=4+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function five(){
    let a1=5+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function six(){
    let a1=6+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function seven(){
    let a1=7+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function eight(){
    let a1=8+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function nine(){
    let a1=9+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function zero(){
    let a1=0+""
    if(num1.innerText === "0"){
        num1.textContent = a1
    }
    else {
        num1.textContent += a1
    }
}
function add(){
    let a1="+"
    num1.textContent += a1
}
function sub(){
    let a1="-"
    num1.textContent += a1
}
function mul(){
    let a1="*"
    num1.textContent += a1
}
function div(){
    let a1="/"
    num1.textContent += a1
}
function clr(){
    num1.textContent = ""
}
function back(){
    let a = num1.innerText
    num1.textContent = a.slice(0,a.length-1)
}
function answer(){
    let operators = ["+", "-", "*", "/"];
    let consecutiveOperators = /([+\-*\/]){2,}/;
    let num2 =  document.getElementById("div1").innerText
    if(consecutiveOperators.test(num2)){
        clr();
    }
    else {
        let num=eval(num2)
        num1.textContent=eval(num)
    }
}