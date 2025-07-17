const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

const counterInput = document.getElementById("counter-value")


function handleOnchange() {
    count = counterInput.value
}
function changeColor(){
    if (count > 0){
        counterInput.style.color = "green";
    }else if(count < 0){
        counterInput.style.color = "red";
    }else {
        counterInput.style.color = "black";
    }   
}

let count = 0;

decrease.onclick = function(){
    count--;
    counterInput.value = count
    console.log(counterInput.value)  
    changeColor();   
}   

reset.onclick = function(){
    count = 0;
    counterInput.value = count
    console.log(counterInput.value)
    changeColor();    
}    

increase.onclick = function(){
    count++;
    counterInput.value = count
    console.log(counterInput.value)
    changeColor(); 
}


