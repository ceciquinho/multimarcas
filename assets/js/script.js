document.addEventListener("DOMContentLoaded", function() {
    // Activate Carousel
    var myCarousel = document.querySelector('#carouselExampleControls');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      wrap: true
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    const moveToSlide = (index) => {
      const container = document.querySelector(".carousel-container");
      const slideWidth = slides[0].offsetWidth;
      container.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
      updateIndicators();
    };
  
    const updateIndicators = () => {
      const indicators = document.querySelectorAll(".indicator");
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    };
  
    const nextSlide = () => {
      if (currentIndex < totalSlides - 1) {
        moveToSlide(currentIndex + 1);
      } else {
        moveToSlide(0);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
      } else {
        moveToSlide(totalSlides - 1);
      }
    };
  
    document.querySelector(".carousel-control.next").addEventListener("click", nextSlide);
    document.querySelector(".carousel-control.prev").addEventListener("click", prevSlide);
  
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        moveToSlide(index);
      });
    });
  
    // Auto slide
    setInterval(() => {
      nextSlide();
    }, 3000);
  });