//przewijanie strony na start 
const toUp = document.querySelector('.toUp');
const header = document.querySelector('header');
const foto = document.querySelector('.foto');
const aboutMe = document.querySelector('.aboutMe');
const galery = document.querySelector('.galery');
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

// nawigacja i odsyłacze 

const li1 = document.querySelector('li:nth-of-type(1)');
const li2 = document.querySelector('li:nth-of-type(2)');
const li3 = document.querySelector('li:nth-of-type(3)');

li1.addEventListener('click',()=> {
    $('body, html').animate({
        scrollTop: foto.clientHeight- header.clientHeight
    });
});

li2.addEventListener('click',()=> {
    $('body, html').animate({
        scrollTop: foto.clientHeight + aboutMe.clientHeight - header.clientHeight
    });
});

li3.addEventListener('click',()=> {
    $('body, html').animate({
        scrollTop: foto.clientHeight + aboutMe.clientHeight + galery.clientHeight
    });
});

//hamburger menu 

const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('aside');

hamburger.addEventListener('click',()=> {

    hamburger.classList.toggle('active');
    aside.classList.toggle('active');
});