// const track = document.querySelector(".carousel__track");
// const slides = Array.from(track.children);
// const prevBtn = document.querySelector(".carousel__btn-left");
// const nextBtn = document.querySelector(".carousel__btn-right");

// const slideSizeWidth = slides[0].getBoundingClientRect().width;

///////////////////////////////////////
// Slider
const slider = function () {
    const slides = document.querySelectorAll('.carousel__slide');
    const btnLeft = document.querySelector('.carousel__btn-left');
    const btnRight = document.querySelector('.carousel__btn-right');

  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions

  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  

  };
  slider();