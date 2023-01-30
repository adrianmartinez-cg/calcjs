import { userInput } from "../control/userInput.js";

export let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click',function(){
    userInput.value = '';
});