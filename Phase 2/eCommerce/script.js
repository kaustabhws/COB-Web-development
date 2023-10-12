// Mobile navigation
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mobileNav = document.querySelector('.menu-toggle');
    const mobileList = document.querySelector('.nav');
    const body = document.body;

    mobileMenuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('is-active');
        mobileList.classList.toggle('mobile-nav')
        body.classList.toggle('no-scroll');
    });

    const listItems = document.querySelectorAll('.nav-item');
    
    listItems.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            mobileNav.classList.remove('is-active');
            mobileList.classList.remove('mobile-nav');
            body.classList.remove('no-scroll');
        });
    });
});

// Banner
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("image-slide");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000); // Change image every 3 seconds (adjust as needed)
}
