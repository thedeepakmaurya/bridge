const swiper = new Swiper(".marquee-swiper", {
  loop: true,
  loopedSlides: 3,
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
});

document.querySelectorAll(".community-swiper").forEach((swiperEl) => {
  new Swiper(swiperEl, {
    loop: true,
    allowTouchMove: false,
    slidesPerView: "1.5",
    spaceBetween: 96,
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      480: {
        slidesPerView: "1.5",
        spaceBetween: 16,
      },
      768: {
        slidesPerView: "2.1",
      },
      1024: {
        slidesPerView: 3.1,
      },
      1280: {
        slidesPerView: 4.5,
      },
    },
  });
});

document.querySelectorAll(".team-swiper").forEach((swiperEl) => {
  new Swiper(swiperEl, {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 1.1,
    navigation: {
      nextEl: swiperEl.parentElement.querySelector(".team-button-next"),
      prevEl: swiperEl.parentElement.querySelector(".team-button-prev"),
    },
    breakpoints: {
      480: {
        slidesPerView: 1.1,
        spaceBetween: 16,
      },

      640: {
        slidesPerView: 2,

        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2.5,

        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 4,

        spaceBetween: 24,
      },

      1280: {
        slidesPerView: 4,

        spaceBetween: 24,
      },
    },
  });
});

document.querySelectorAll(".swiper").forEach((swiperEl) => {
  new Swiper(swiperEl, {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 1.1,
    navigation: {
      nextEl: swiperEl.parentElement.querySelector(".swiper-button-next"),
      prevEl: swiperEl.parentElement.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      480: {
        slidesPerView: 1.1,
        spaceBetween: 16,
      },

      640: {
        slidesPerView: 2,

        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2.5,

        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3,

        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3,

        spaceBetween: 24,
      },
    },
  });
});
