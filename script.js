// ********** nav toggle ************
// select button and links
const navBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const header = document.querySelector('.header');

// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.nav-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove('show-links');

    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const headerHeight = header.getBoundingClientRect().height;

    let position = element.offsetTop - headerHeight;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
  });
});

//* volume audio
const audio = document.getElementById('song');
audio.volume = 0.05;
