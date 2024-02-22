import { enableScroll, disableScroll } from "./scrollController.js"


const burger = document.querySelector(".burger");
const burgerLine = document.querySelector(".burger__line");
const burgerArrow = document.querySelector(".burger__arrow");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const headerOverlay = document.querySelector(".header__overlay");



burger.addEventListener("click", function () {
	burger.classList.toggle("burger_active");
	nav.classList.toggle("nav_open");
	header.classList.toggle("header_active");
	burgerLine.classList.toggle("burger__line_active");
	burgerArrow.classList.toggle("burger__arrow_active");

	if (burger.classList.contains("burger_active")) {
		disableScroll();
	} else {
		enableScroll();
	}
})

if (headerOverlay) {
	headerOverlay.addEventListener("click", () => {
		burger.classList.remove("burger_active");
		nav.classList.remove("nav_open");
		header.classList.remove("header_active");
		enableScroll();
	});
}