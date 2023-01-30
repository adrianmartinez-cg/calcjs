const allowedKeys = ['(',')','.','0','1','2','3','4','5','6','7','8','9','+','-','*','/','%'];
export const userInput = document.getElementById('userInput');
export const output = document.getElementById('result');

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

export function evaluateResult(){
    let error = false;
    if(userInput.value != ''){
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
}
