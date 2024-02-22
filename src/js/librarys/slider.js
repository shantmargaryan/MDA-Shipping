import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.work__swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	modules: [Navigation, Pagination],

	spaceBetween: 15,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	}
});