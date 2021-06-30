//przewijanie strony na start 
const toUp = document.querySelector('.toUp');
const header = document.querySelector('header');
const foto = document.querySelector('.foto');

toUp.addEventListener('click',()=> {
    $('body, html').animate({
        scrollTop: 0
    });
});

window.addEventListener('scroll',()=> {

    if(scrollY > foto.clientHeight)
    {
        toUp.classList.add('active');
    }
    else
    {
        toUp.classList.remove('active');
    }
});