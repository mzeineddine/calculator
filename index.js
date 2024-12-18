
// let arr = document.getElementById("expression"); 
// document.getElementById("result").innerHTML = arr;
let input;
let operators;
let buttons;
document.addEventListener("DOMContentLoaded", loaded)

function backspace(){
    // input.value = input.value.slice(0, input.value.length-1);
    input.value = input.value.slice(0,-1);
}

function print(event){
    console.log("click");
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
    if(operators.includes(event.key)|| !isNaN(event.key)){
        if(event.key == " " && input.value.charAt(input.selectionStart-1) == " "){
            event.preventDefault();
        }
    }else{
        event.preventDefault();
    }
}

function calculate(){
    
    let arr = input.value.trim().split(" ");
    let nb = [];
    let op = [];
    // Check the type of expression
    if(!isNaN(arr[0])){
        console.log("using Postfix");
        for(let i = 0; i <arr.length; i++){
            console.log(arr[i]);
            if (operators.includes(arr[i])){
                let x;
                let y;
                if (nb.length>1){
                    console.log("nb = " + nb);
                    y = Number(nb.pop());
                    console.log("Y = " + y);
                    x = Number(nb.pop());
                    console.log("X = " + x);
                }
                else{
                    input.value = "Not enough operants";
                    return;
                }
                if(arr[i] == "+"){
                    nb.push(x+y);
                    console.log(x+y);
                }
                else if(arr[i] == "-"){
                    nb.push(x-y);
                    console.log(x-y);
                }
                else if(arr[i] == "*"){
                    nb.push(x*y);
                    console.log(x*y);
                }
                else if(arr[i] == "/")
                    nb.push(x/y);
            }else if(!isNaN(arr[i])){
                nb.push(arr[i]);
            }
        }
        if (nb.length == 1){
            input.value = nb[0];
        } 
        else{
            input.value = "Too many operants";
        }
    }else if(operators.includes(arr[0])){
        console.log("using Prefix")
        arr = arr.reverse();
        for(let i = 0; i <arr.length; i++){
            console.log(arr[i]);
            if (operators.includes(arr[i])){
                let x;
                let y;
                if (nb.length>1){
                    console.log("nb = " + nb);
                    x = Number(nb.pop());
                    console.log("X = " + x);
                    y = Number(nb.pop());
                    console.log("Y = " + y);
                }
                else{
                    input.value = "Not enough operants";
                    return;
                }
                if(arr[i] == "+"){
                    nb.push(x+y);
                    console.log(x+y);
                }
                else if(arr[i] == "-"){
                    nb.push(x-y);
                    console.log(x-y);
                }
                else if(arr[i] == "*"){
                    nb.push(x*y);
                    console.log(x*y);
                }
                else if(arr[i] == "/")
                    nb.push(x/y);
            }else if(!isNaN(arr[i])){
                nb.push(arr[i]);
            }
        }
        if (nb.length == 1){
            input.value = nb[0];
        } 
        else{
            input.value = "Too many operants";
        }
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

}