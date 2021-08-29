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

const allRings = [...document.querySelectorAll('.oneRing')];
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');

let i = 0;
const fotos = ['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg'];

const changeFoto = function() {

    i++;
    if(i===fotos.length)
    {
        i=0;
    }
    
    allRings.forEach((oneRing)=>{
        oneRing.classList.remove('active');
    })
    allRings[i].classList.add('active');
    foto.innerHTML = `<img src="css/foto/${fotos[i]}">`;
}

let interval = setInterval(changeFoto,8000);

const slideFoto = function()
{
    if(this.className==="arrowLeft")
    {
        i--;
        if(i===fotos.length)
        {
            i=0;
        }
        else if(i<0)
        {
            i=fotos.length-1;
        }
        foto.innerHTML = `<img src="css/foto/${fotos[i]}">`;
        allRings.forEach((oneRing)=>{
            oneRing.classList.remove('active');
        })
        allRings[i].classList.add('active');
        clearInterval(interval);
        interval = setInterval(changeFoto,8000);
    }
    else if(this.className==="arrowRight")
    {
        i++;
        if(i===fotos.length)
        {
            i=0;
        }
        else if(i<0)
        {
            i=fotos.length-1;
        }
        foto.innerHTML = `<img src="css/foto/${fotos[i]}">`;
        allRings.forEach((oneRing)=>{
            oneRing.classList.remove('active');
        })
        allRings[i].classList.add('active');
        clearInterval(interval);
        interval = setInterval(changeFoto,8000);
    }
}

arrowLeft.addEventListener('click',slideFoto);
arrowRight.addEventListener('click',slideFoto);