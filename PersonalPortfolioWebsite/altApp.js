// ============================================ toggle icon navbar ============================================ //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle
};


// ============================================ scroll section active link ============================================ //

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                // removes highlight color from previous page tab 
                links.classList.remove('currentPage');
                // adds highlight color to new current page tab 
                document.querySelector('header nav a[href*=' + id + ']').classList.add('currentPage');
            });
        };
    });



// ============================================ sticky navbar ============================================ //


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);



};


// https://www.youtube.com/watch?v=Tkp3FDgOueM
// 55