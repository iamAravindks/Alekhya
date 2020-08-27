var navbar = document.querySelector('.navbar');
var toggleIcon = document.querySelector('.toggle-collapse');

toggleIcon.addEventListener('click', function(){
    navbar.classList.toggle('nav-collapse');
});

bgSite = document.querySelector('.bg-site');
bgTop = bgSite.offsetTop;
window.addEventListener('scroll', function(){
    if(window.scrollY>0){
        navbar.classList.add('nav-scroll');
    }
    else{
        navbar.classList.remove('nav-scroll');
    }
});
function navlink(){
    navbar.classList.remove('nav-collapse');
}

var cateul = document.querySelector('.collapse-cate-nav');
var ultoggler = document.querySelector('.ul-toggler');
ultoggler.addEventListener('click',function(){
    cateul.classList.toggle('activated');
});