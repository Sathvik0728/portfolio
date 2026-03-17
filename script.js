const roles = [
"AI Enthusiast",
"Machine Learning Learner",
"Software Developer"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

const element = document.querySelector(".typing");

if(charIndex < roles[roleIndex].length){

element.textContent += roles[roleIndex].charAt(charIndex);
charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,2000);

}

}

function eraseEffect(){

const element = document.querySelector(".typing");

if(charIndex > 0){

element.textContent = roles[roleIndex].substring(0,charIndex-1);
charIndex--;

setTimeout(eraseEffect,50);

}else{

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

setTimeout(typeEffect,500);

}

}


typeEffect();