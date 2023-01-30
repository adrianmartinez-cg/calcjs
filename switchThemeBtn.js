const body = document.getElementById('body');
export const switchThemeBtn = document.getElementById('switchThemeBtn');
switchThemeBtn.addEventListener('click',function(){
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
});