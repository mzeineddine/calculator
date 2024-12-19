
// let arr = document.getElementById("expression"); 
// document.getElementById("result").innerHTML = arr;
let input;
let operators;
let buttons;
let mode;
document.addEventListener("DOMContentLoaded", loaded)

function changeTheme(){
    let functionalButtons = document.querySelectorAll(".functional");
    if(mode.checked){
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove("blight")
        }
        for(let i = 0; i < functionalButtons.length; i++){
            functionalButtons[i].classList.remove("blight")
        }
    }
    else{
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.add("blight")
        }
        for(let i = 0; i < functionalButtons.length; i++){
            functionalButtons[i].classList.add("blight")
        }
    }
}

function backspace(){
    input.value = input.value.slice(0,-1);
}

function print(event){
    console.log("click");
    // Prevent any key press neither nb nor op and prevent double spaces
    if(input.value[input.value.length-1]==" " && event.target.value == " "){
        return;
    }
    else if(operators.includes(input.value[input.value.length-1]) && operators.includes(event.target.value)){
        input.value = input.value.slice(0,-1) + event.target.value;
        return
    }
    input.value += event.target.value;
}

function checkKey(event){
    // Prevent any key press neither nb nor op and prevent double spaces
    if(event.key == "Enter"){
        getType();
    }
    else if(operators.includes(event.key)|| !isNaN(event.key)){
        if(event.key == " " && input.value.charAt(input.selectionStart-1) == " "){
            event.preventDefault();
        }
    }else{
        event.preventDefault();
    }
}

function calc(type, arr){
    let nb = [];
    for(let i = 0; i <arr.length; i++){
        console.log(arr[i]);
        let x;
        let y;
        if (operators.includes(arr[i])){
            if (nb.length>1){
                if(type == "pre"){
                    x = Number(nb.pop());
                    console.log("X = " + x);
                    y = Number(nb.pop());
                    console.log("Y = " + y);
                }
                else if(type == "post"){
                    y = Number(nb.pop());
                    console.log("Y = " + y);
                    x = Number(nb.pop());
                    console.log("X = " + x);
                }
            } else{
                input.value = "Not enough operants";
                return;
            } if(arr[i] == "+")
                nb.push(x+y);
            else if(arr[i] == "-")
                nb.push(x-y);
            else if(arr[i] == "*")
                nb.push(x*y); 
            else if(arr[i] == "/")
                    nb.push(x/y);
        } else if(!isNaN(arr[i]))
            nb.push(arr[i]);
    }
    if (nb.length == 1){
        input.value = nb[0];
    } 
    else{
        input.value = "Too many operants";
    }
}

function getType(){ 
    // Check the type of expression
    let arr = input.value.trim().split(" ");
    if(!isNaN(arr[0]))
        calc("post", arr);
    else if(operators.includes(arr[0])){
        arr = arr.reverse();
        calc("pre", arr);
    }
}

function cleare(){
    console.log("clear");
    input.value = "";
}

function loaded(){
    input = document.getElementById("expression");
    operators = ['+', '-', '*', '/'];
    input.addEventListener("keypress", checkKey);
    buttons = document.querySelectorAll('.p');
    for(let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", print);
    }
    mode = document.getElementById("mode");
    mode.addEventListener("click", changeTheme);
}