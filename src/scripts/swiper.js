
const baseConfig={
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
}


var swiper = new Swiper(".carousel", {
  slidesPerView: "auto",
  freeMode: true,
  ...baseConfig, 
  
});


var carousel_grid = new Swiper(".carousel_grid", {
  slidesPerView: "auto",
  freeMode: true,
  grid: {
    rows: 3,
  },
  ...baseConfig,
});

var carousel_fresh = new Swiper(".carousel_fresh", {
  slidesPerView: "auto",
  freeMode: true,
  grid: {
    rows: 2,
  },
  ...baseConfig,
});

var slider = new Swiper(".slider", {
  ...baseConfig,
  loop:true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    clickable:true,
    el: ".swiper-pagination",
  },
});