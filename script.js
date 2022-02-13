const nav = document.querySelector('.navbar')
document.addEventListener('scroll', ()=>{
    if(scrollY >20){
        nav.classList.add('sticky')
    }else{
        nav.classList.remove('sticky')
    }
})