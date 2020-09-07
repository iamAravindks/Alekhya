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













var cate = document.getElementsByClassName('cards')[0];
var left = 0;


cate.addEventListener('touchstart',function(event){
     startingX = event.touches[0].clientX;
    
});
cate.addEventListener("touchmove",function(event){
    event.preventDefault();
    var touch = event.touches[0];
    change = startingX - touch.clientX;
    if(left-change>0){
        if(cate.offsetLeft>0){
            return;
        }
    }
  
    
 
       
    console.log(cate.offsetWidth);
console.log(cate.getBoundingClientRect().right);
    

    cate.style.left=left-change+"px";
    
   
    
    
   

});
console.log(cate.offsetWidth);
console.log(cate.getBoundingClientRect().right);
cate.addEventListener("touchend",function(){
    left= left-change;
    
});
