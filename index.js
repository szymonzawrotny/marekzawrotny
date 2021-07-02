//przewijanie strony na start 
const toUp = document.querySelector('.toUp');
const header = document.querySelector('header');
const foto = document.querySelector('.foto');
const ul = document.querySelector('header .option ul');

toUp.addEventListener('click',()=> {
    $('body, html').animate({
        scrollTop: 0
    });
});

window.addEventListener('scroll',()=> {

    if(scrollY > foto.clientHeight/2)
    {
        toUp.classList.add('active');
        header.classList.add('active'); //zmiana koloru headera
        ul.classList.add('active');
    }
    else
    {
        toUp.classList.remove('active');
        header.classList.remove('active');
        ul.classList.remove('active');
    }
});
