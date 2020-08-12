var navbar = document.getElementsByClassName('navbar')[0];
var toggler = document.getElementsByClassName('toggle-collapse')[0];

toggler.addEventListener('click',function(){
    navbar.classList.toggle('nav-collapse');
})