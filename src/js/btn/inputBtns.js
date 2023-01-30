import { userInput } from "../control/userInput.js";

export let inputBtns = document.querySelectorAll('.inputBtn');
inputBtns.forEach(function(btn){
    btn.addEventListener('click',function(ev){
        userInput.value+=btn.dataset.value;
    });
});