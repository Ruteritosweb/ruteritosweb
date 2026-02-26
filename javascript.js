
    const track = document.getElementById("carouselTrack");
    const slides = track.children;
    const totalSlides = slides.length;
    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateCarousel();
        resetAutoSlide();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
        resetAutoSlide();
    }

    let autoSlide = setInterval(nextSlide, 5000);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 5000);
    }


