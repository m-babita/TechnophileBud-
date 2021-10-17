const navMenu = document.getElementById('nav-menu'),
   toggleMenu = document.getElementById('nav-toggle'),
   closeMenu = document.getElementById('nav-close')

//    show menu
if(toggleMenu){
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})
}

//    hide menu
if(closeMenu){
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})
}