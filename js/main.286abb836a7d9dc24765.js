var navbar=document.querySelector(".navbar"),toggleIcon=document.querySelector(".toggle-collapse");function navlink(){navbar.classList.remove("nav-collapse")}toggleIcon.addEventListener("click",function(){navbar.classList.toggle("nav-collapse")}),bgSite=document.querySelector(".bg-site"),bgTop=bgSite.offsetTop,window.addEventListener("scroll",function(){0<window.scrollY?navbar.classList.add("nav-scroll"):navbar.classList.remove("nav-scroll")});var cateul=document.querySelector(".collapse-cate-nav"),ultoggler=document.querySelector(".ul-toggler");ultoggler.addEventListener("click",function(){cateul.classList.toggle("activated")});