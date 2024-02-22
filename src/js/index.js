
import "./librarys/burger.js"; // burger
import "./librarys/animation.js" // animation
import "./librarys/slider.js" // slider


// img-preloader

// const heroImg = document.querySelectorAll("img");

// const intersectionObserver = new IntersectionObserver((entries, observe) => {
// 	entries.forEach((entry) => {
// 		if (entry.isIntersecting) {
// 			entry.target.src = entry.target.dataset.src;
// 			observe.unobserve(entry.target);
// 			entry.target.addEventListener("load", () => {
// 				entry.target.parentElement.classList.add("preloader_load");
// 			});
// 		}
// 	});
// });

// heroImg.forEach((item) => {
// 	intersectionObserver.observe(item);
// })

// page-loader

const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
	if (!loader.classList.contains("loader_hide")) {
		loader.classList.add("loader_hide");
	}
});