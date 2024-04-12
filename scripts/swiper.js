const swiper = new Swiper('.swiper', {
  // Optional parameters
  /* direction: 'vertical',
  loop: true, */

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});

const roomsSwiper = new Swiper(".roomsSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    /* type: 'custom',
    renderCustom: function (swiper, current, total) {
      // console.log(swiper)
      let div = ''
      swiper.slides.forEach((slide, index) => {
        // console.log(index+1)
        div += `<div class="slider-page">${index+1}</div>`
      });

      return div;
    }, */
    renderBullet: function (index, className) {
      return '<span class="' + className + ' ' + className + '--custom">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
