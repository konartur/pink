$(document).ready(function () {
  new Swiper(".slider-comments", {
    pagination: {
      el: ".swiper-pagination-comments",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
  new Swiper(".slider-table", {
    pagination: {
      el: ".swiper-pagination-table",
    },

    loop: true,
  });
});
