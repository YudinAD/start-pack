//ADD TO HEAD TAG
const swiperCSS = `<link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>`;
const swiperJS = `<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" defer></script>`;

const addSlider = () => {
	const slider = new Swiper('.swiper', {
		loop: true,
		direction: 'horizontal',

        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        },

		autoplay: {
			delay: 5000,
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 60
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 60
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 60
			},
		},

		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд'
		}
	});
};