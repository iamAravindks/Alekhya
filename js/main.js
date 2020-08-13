var navbar = document.querySelector('.navbar');
var toggleIcon = document.querySelector('.toggle-collapse');

toggleIcon.addEventListener('click', function(){
    navbar.classList.toggle('nav-collapse');
});