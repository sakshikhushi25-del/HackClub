let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let countElement = document.getElementById("heading")

let count = 0;
increase.addEventListener("click", () => {
    count++;
    countElement.innerText = count;
})
decrease.addEventListener("click", () => {
    count--;
    countElement.innerText = count;
})
reset.addEventListener("click", () => {
    count = 0; 
    countElement.innerText = count;   
})