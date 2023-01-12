/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Мы подключаем Swider Slider с node_modules
// При необходимости подключите дополнительные модули слайдера, указав на них в {} черезКому
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from "swiper";
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Посмотрите больше https://swiperjs.com/
*/

// Стили Swiper
// Основные стили
import "../../scss/base/swiper.scss";
// Полный набор стилей с scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей с node_modules
// import 'swiper/css';

// Инициализация ползунков
function initSliders() {
  // Список ползунков
  // Проверьте, находится ли слайдер на странице
  if (document.querySelector(".swiper")) {
    // Укажите навык желаемого ползунка
    // создаем слайдеры через  -- ; --
    new Swiper(".NAME__slider", {
      // selector
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      /*
			// Последствия
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/
      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".NAME__button-prev", //selector
        nextEl: ".NAME__button-next", //selector
      },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
    // new Swiper(".NAME__slider", {    //selector
    //   modules: [Navigation],
    //   observer: true,
    //   observeParents: true,
    //   slidesPerView: 3,
    //   spaceBetween: 0,
    //   autoHeight: true,
    //   speed: 800,

    //   //touchRatio: 0,
    //   //simulateTouch: false,
    //   //loop: true,
    //   //preloadImages: false,
    //   //lazy: true,

    //   /*
    // 	// Последствия
    // 	effect: 'fade',
    // 	autoplay: {
    // 		delay: 3000,
    // 		disableOnInteraction: false,
    // 	},
    // 	*/

    //   // Пагінація
    //   /*
    // 	pagination: {
    // 		el: '.swiper-pagination',
    // 		clickable: true,
    // 	},
    // 	*/

    //   // Скроллбар
    //   /*
    // 	scrollbar: {
    // 		el: '.swiper-scrollbar',
    // 		draggable: true,
    // 	},
    // 	*/

    //   // Кнопки "вліво/вправо"
    //   navigation: {
    //     prevEl: ".NAME-BLOCK__button-prev",    // selector
    //     nextEl: ".NAME-BLOCK__button-next",    // selector
    //   },
    //   /*
    // 	// Брейкпоінти
    // 	breakpoints: {
    // 		640: {
    // 			slidesPerView: 1,
    // 			spaceBetween: 0,
    // 			autoHeight: true,
    // 		},
    // 		768: {
    // 			slidesPerView: 2,
    // 			spaceBetween: 20,
    // 		},
    // 		992: {
    // 			slidesPerView: 3,
    // 			spaceBetween: 20,
    // 		},
    // 		1268: {
    // 			slidesPerView: 4,
    // 			spaceBetween: 30,
    // 		},
    // 	},
    // 	*/
    //   // События
    //   on: {},
    // });
  }
}
// Свиток на основе слайдера (по классу swiper scroll дляОболонкиСлайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ползунков инициализации
  initSliders();
  // Запуск инициализации прокрутки на слайдере (по классу swiper_scroll)
  //initSlidersScroll();
});
