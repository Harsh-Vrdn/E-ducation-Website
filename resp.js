burger=document.querySelector('.burger');
// it selects the burger class
navbar=document.querySelector('.navbar');
rightnav=document.querySelector('.rightnav');
navlist=document.querySelector('.navlist');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vis')
    navlist.classList.toggle('vis')
    navbar.classList.toggle('h-nav')
})