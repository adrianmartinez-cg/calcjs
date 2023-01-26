const allowedKeys = ['(',')','.','0','1','2','3','4','5','6','7','8','9','+','-','*','/','%'];
let userInput = document.getElementById('userInput');
let switchThemeBtn = document.getElementById('switchThemeBtn');
let evalBtn = document.getElementById('evalBtn');
let output = document.getElementById('result');
let body = document.getElementById('body');
let inputBtns = document.querySelectorAll('.inputBtn');
let clearBtn = document.getElementById('clearBtn');
let copyBtn = document.getElementById('copyToClipboard');

userInput.addEventListener('keydown',function(ev){
    ev.preventDefault();
    if(allowedKeys.includes(ev.key)){
        userInput.value+=ev.key;
    }
    if(ev.key==='Backspace'){
        userInput.value = userInput.value.slice(0,-1);
    }
    if(ev.key==='Enter'){
        evaluateResult();
    }
});

switchThemeBtn.addEventListener('click',function(){
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
});

evalBtn.addEventListener('click',evaluateResult);

function evaluateResult(){
    let error = false;
    try{
        let result = eval(userInput.value);
        output.value = result;
        userInput.value = '';
        error = false;
    } catch(e){
        error = true;
    } finally {
        if(error){
            if(!output.classList.contains('error-msg')){
                output.classList.add('error-msg');
                output.value = 'E';
            }
        } else {
            if(output.classList.contains('error-msg')){
                output.classList.remove('error-msg');
            }
        }
    }
}

inputBtns.forEach(function(btn){
    btn.addEventListener('click',function(ev){
        userInput.value+=btn.dataset.value;
    });
});

clearBtn.addEventListener('click',function(){
    userInput.value = '';
});

copyBtn.addEventListener('click',function(){
    if(!copyBtn.classList.contains('copy-to-clipboard')){
        copyBtn.innerText = 'Copied to clipboard!';
        window.navigator.clipboard.writeText(output.value);
    } else {
        copyBtn.innerText = 'Copy';
    }
    copyBtn.classList.toggle('copy-to-clipboard');
    
});