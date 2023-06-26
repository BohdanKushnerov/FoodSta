const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
