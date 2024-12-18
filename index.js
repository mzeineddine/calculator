
// let arr = document.getElementById("expression"); 
// document.getElementById("result").innerHTML = arr;
let input;
let result;
let operators;
document.addEventListener("DOMContentLoaded", loaded)

function checkKey(){
    if(operators.includes(event.key)|| !isNaN(event.key)){
        if(event.key == " " && input.value.charAt(input.value.length -1) == " "){
            event.preventDefault();
        }
    }else{
        event.preventDefault();
    }
}

function calculate(){
    
    let arr = input.value.trim().split(" ");
    result.innerHTML = arr;
    let nb = [];
    let op = [];
    if(!isNaN(arr[0])){
        console.log("using Postfix");
        for(let i = 0; i <arr.length; i++){
            console.log(arr[i]);
            if (operators.includes(arr[i])){
                // op.push(arr[i]);
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
                    result.innerHTML = "Not enough operants";
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
            result.innerHTML = nb[0];
        } 
        else{
            result.innerHTML = "Too many operants";
        }
    }else if(operators.includes(arr[0])){
        console.log("using Prefix")
    }

}

function loaded(){
    input = document.getElementById("expression");
    result = document.getElementById("result");
    operators = ['+', '-', '*', '/'];
    input.addEventListener("keypress", checkKey);
}