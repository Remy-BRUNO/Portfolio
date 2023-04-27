// ********** nav toggle ************
// select button and links
const navBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
// add event listener
navBtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".nav-link");
scrollLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		// prevent default
		e.preventDefault();
		links.classList.remove("show-links");

		const id = e.target.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		//
		let position = element.offsetTop - 180;

		window.scrollTo({
			left: 0,
			// top: element.offsetTop,
			top: position,
			behavior: "smooth",
		});
	});
});
