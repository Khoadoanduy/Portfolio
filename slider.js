let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("card__container");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active"; // Corrected this line

    // Change image every 3 seconds
}

showSlides();

function currentSlide(n) {
    slideIndex = n; // Corrected this line
    showSlides();
}

function changeSlide(n) {
    currentSlide(slideIndex);
}
