window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const hamburger = document.querySelector('#nav-open');
    const menu = document.querySelector('#nav-opened');
    hamburger.addEventListener('click', function (event) {
        event.stopPropagation();
        menu.classList.remove("hidden");
        console.log('Iclicked on the hamburger menu');
    })
    const body = document.querySelector('body');
    body.addEventListener('click', function (event) {
        menu.classList.add("hidden");  
        console.log('I clicked on the body')
    })
});


