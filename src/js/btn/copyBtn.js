import { output } from "../control/userInput.js";

export let copyBtn = document.getElementById('copyToClipboard');
copyBtn.addEventListener('click',function(){
    if(!copyBtn.classList.contains('copy-to-clipboard')){
        copyBtn.innerText = 'Copied to clipboard!';
        window.navigator.clipboard.writeText(output.value);
    } else {
        copyBtn.innerText = 'Copy';
    }
    copyBtn.classList.toggle('copy-to-clipboard');
    
});