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

const allLi = [...document.querySelectorAll('li')];

allLi.forEach((one)=> {
    one.addEventListener('click', function() {

        const goToSection = '#' + $(this).attr('class');
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top - header.clientHeight
        });
        hamburger.classList.remove('active');
        aside.classList.remove('active');
    })
})

//hamburger menu 

const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('aside');

hamburger.addEventListener('click',()=> {

    hamburger.classList.toggle('active');
    aside.classList.toggle('active');
});

//slider

let i = 0;
const fotos = ['slide.jpg','slide2.jpg','slide3.jpg','slide5.jpg'];

const changeFoto = function() {

    if(i>fotos.length-1)
        i=0;

    foto.innerHTML = `<img src="css/foto/${fotos[i]}">`;
    i++;
}

setInterval(changeFoto,8000);