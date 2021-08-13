import * as bootstrap from "bootstrap";

window.onload = function () {
	var navBar = document.querySelector("nav");
	var arrowUp = document.querySelector("#back-to-top");

	function shrinkNav(e) {
		if (window.scrollY > 50) {
			navBar.classList.add("shrinked");
		} else {
			navBar.classList.remove("shrinked");
		}
	}

	function toggleArrow(e) {
		if (window.scrollY >= 500) {
			arrowUp.classList.add("visible");
		} else {
			arrowUp.classList.remove("visible");
		}
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	arrowUp.addEventListener("click", scrollToTop);
	window.addEventListener("scroll", toggleArrow);
	window.addEventListener("scroll", shrinkNav);
};
