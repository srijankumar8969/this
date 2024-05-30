const groove = document.getElementById('groove');
const body = document.querySelector('body');
groove.addEventListener('click',()=>{
    groove.classList.toggle('active');
    body.classList.toggle('active');
})
