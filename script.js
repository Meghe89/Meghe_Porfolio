/* navbar actions */
const nav = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn')
const menuItems = document.querySelectorAll('.menu-items')

/* navbar bg */
document.addEventListener('scroll', ()=>{
    if(scrollY >20){
        nav.classList.add('sticky')
    }else{
        nav.classList.remove('sticky')
    }
})

function toggle() {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('is-active')
}

menuBtn.addEventListener('click', ()=>{
   toggle()
})


menuItems.forEach(el=>{
    el.addEventListener('click',()=>{
    toggle()
    })
})

/* scroll up */
let upBtn = document.querySelector('.scroll-up-btn')

document.addEventListener('scroll',()=>{
    if(scrollY >=500){
        upBtn.style.display = 'block'
    }else{
        upBtn.style.display = 'none'
    }
})
upBtn.addEventListener('click',()=>{
    window.scrollTo(0, 0);
})

/* typing animation */
 var typed = new Typed(".typing", {
     strings: ["Front-End Developer", "Designer", "Freelancer"],
     typeSpeed :100,
     backSpeed: 60,
     loop:true
 });

 var typed = new Typed(".typing2", {
     strings: ["Developer", "Designer", "Freelancer"],
     typeSpeed :100,
     backSpeed: 60,
     loop:true
 });

/* date */
let now = new Date()
let year = now.getFullYear()

let yea = document.querySelector('#year');
yea.innerHTML=year;