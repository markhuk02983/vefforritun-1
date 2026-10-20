let likes = 0;

const button = document.querySelector("button");
const counter = document.querySelector("span");

counter.textContent = likes;

button.addEventListener("click", function(){
    likes++;
    counter.textContent = likes;
});