const text = "AI Developer | Python Programmer | ML Enthusiast";

let index = 0;

function typing(){

document.querySelector(".typing").textContent = text.slice(0,index++);

if(index <= text.length){

setTimeout(typing,100);

}

}

typing();