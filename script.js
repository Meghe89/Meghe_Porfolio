const nav = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn')

/* navbar bg */
document.addEventListener('scroll', ()=>{
    if(scrollY >20){
        nav.classList.add('sticky')
    }else{
        nav.classList.remove('sticky')
    }
})

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    menuBtn.classList.toggle('is-active')
})