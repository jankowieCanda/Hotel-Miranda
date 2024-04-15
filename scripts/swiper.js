// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   /* direction: 'vertical',
//   loop: true, */

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   /* scrollbar: {
//     el: '.swiper-scrollbar',
//   }, */
// });

const roomsSwiper = new Swiper(".roomsSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' ' + className + '--custom">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const indexSwiper = new Swiper('.index-swiper', {

  // If we need pagination
  pagination: {
    el: '.index-swiper-pagination',
  },
});

const ourFoodSwiper = new Swiper('.our-food-swiper', {
  navigation: {
    nextEl: '.our-food-swiper-next',
    prevEl: '.our-food-swiper-prev',
  },
})
