//przewijanie strony na start 
const toUp = document.querySelector('.toUp');
toUp.addEventListener('click',()=> {
    $('body, html').animate({
        scrollTop: 0
    })
})