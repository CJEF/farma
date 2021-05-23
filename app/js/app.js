const nextSlide = document.querySelector('.swiper-button-next--second');
const prevSlide = document.querySelector('.swiper-button-prev--second');
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        // nextE2: '.swiper-button-next--second',
        // prevE2: '.swiper-button-prev--second',
    },

    breakpoints: {
        1000: { /* when window >=0px - webflow mobile landscape/portriat */
            navigation: {
                // nextEl: '.swiper-button-next',
                // prevEl: '.swiper-button-prev',
                nextE1: '.swiper-button-next--second',
                prevE1: '.swiper-button-prev--second',
            },
        },
      },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



const burger = document.querySelector('#burger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.nav-overlay');
const html = document.querySelector('html');
const links = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    html.classList.toggle('overflow-hidden');
    })

document.addEventListener("click", (e) => {
let target = e.target;
if (target === overlay) {
    burger.classList.remove("active");
    nav.classList.remove('active');
    overlay.classList.remove('active');
    html.classList.remove("overflow-hidden");
    }
});

// for (let link of links) {
//     links.addEventListener("click", function (e) {
//     e.preventDefault();
//     burger.classList.remove("active");
//     nav.classList.remove('active');
//     overlay.classList.remove('active');
//     html.classList.remove("overflow-hidden");
//     }
// });

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
