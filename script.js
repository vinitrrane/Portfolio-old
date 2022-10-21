
// Mobile Navbar Section

var navMenu = document.querySelector('.navmenu');
var navIcon = document.querySelector('.navicon');
var closeIcon = document.querySelector('.closeicon');


function expandNav() {


    navMenu.classList.toggle('active');
}

// Dark/Light Mode setcion

var modeIcon = document.querySelector('.navmode span');

modeIcon.addEventListener('click', modeSwitch)

function modeSwitch() {

    document.querySelector('i').classList.toggle("fa-toggle-on")
    document.querySelector('i').classList.toggle("fa-toggle-off")

    if (document.querySelector('.navmode span i').classList == "fa-solid fa-toggle-off") {
        document.querySelector('.home').style.backgroundImage = "url(img/lightBg.jpg)";
        document.querySelector('.contact').style.backgroundImage = "url(img/lightBg.jpg)";
    }
    else {

        document.querySelector('.home').style.backgroundImage = "url(img/darkBg.jpg)";
        document.querySelector('.contact').style.backgroundImage = "url(img/darkBg.jpg)";
    }


    document.body.classList.toggle("dark")
}

// Active Navlink section




// Modal section


let modalImg = document.querySelectorAll('.project img');

let modalMain = document.querySelectorAll('.projectmodal');

let modalClose = document.querySelectorAll('.close')

// Open Modal

for (let i = 0; i < modalImg.length; i++) {

    modalImg[i].addEventListener('click', function (e) {
        let modal = document.querySelector(e.target.getAttribute('href'))
        modal.style.display = "flex";

    })

}

// Close Modal Button

for (let c = 0; c < modalClose.length; c++) {

    modalClose[c].addEventListener('click', function () {


        let modal = this.parentElement.parentElement.parentElement;

        modal.style.display = "none";

    })
}

// Close Modal Outside

window.onclick = function (e) {

    if (e.target.classList.contains('projectmodal')) {
        for (var i in modalMain) {
            if (typeof modalMain[i].style !== 'undefined') modalMain[i].style.display = "none";
        }
    }
}


