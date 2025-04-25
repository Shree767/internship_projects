document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 5000; // 5 seconds

    function updateSlider() {
      
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentSlide);
        });

      
        const offset = -currentSlide * 100; 
        slider.style.transform = `translateX(${offset}%)`;
    }

    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

   
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        startAutoSlide();
    });

   
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            clearInterval(slideInterval);
            currentSlide = index;
            updateSlider();
            startAutoSlide();
        });
    });

    
    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDelay);
    }

    
    updateSlider();
    startAutoSlide();
});