let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');


let formbtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');


menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

formbtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}
