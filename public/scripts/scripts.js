function openMobileNav(e) {
  console.log(e);
  navLinks.classList.toggle('mobile');
}
function handleNavLinksClick() {
  if (navLinks.classList.contains('mobile')) {
    navLinks.classList.remove('mobile');
  }
}
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', openMobileNav);
navLinks.addEventListener('click', handleNavLinksClick);

const navbar = document.querySelector('.navbar');
let sticky = window.innerHeight;
const logo = document.querySelector('.logo');

const home = document.querySelector('#home');
const homeLink = document.querySelector('[href="#home"]');
const about = document.querySelector('#about');
const aboutLink = document.querySelector('[href="#about"]');
const portfolio = document.querySelector('#portfolio');
const portfolioLink = document.querySelectorAll('[href="#portfolio"]')[1];
const contact = document.querySelector('#contact');
const contactLink = document.querySelector('[href="#contact"]');

function navSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('navbar-sticky');
    logo.classList.add('logo-dark');
  } else {
    navbar.classList.remove('navbar-sticky');
    logo.classList.remove('logo-dark');
  }
}

function homeActive() {
  if (window.pageYOffset >= home.offsetTop && window.pageYOffset <= home.offsetTop + home.offsetHeight - 25) {
    homeLink.classList.add('active');
  } else {
    homeLink.classList.remove('active');
  }
}

function aboutActive() {
  if (window.pageYOffset >= about.offsetTop - 25 && window.pageYOffset <= about.offsetTop + about.offsetHeight - 25) {
    aboutLink.classList.add('active');
  } else {
    aboutLink.classList.remove('active');
  }
}

function portfolioActive() {
  if (window.pageYOffset >= portfolio.offsetTop - 25 && window.pageYOffset <= portfolio.offsetTop + portfolio.offsetHeight - 25) {
    portfolioLink.classList.add('active');
  } else {
    portfolioLink.classList.remove('active');
  }
}

function contactActive() {
  if (window.pageYOffset >= contact.offsetTop - 25 && window.pageYOffset <= contact.offsetTop + contact.offsetHeight - 25) {
    contactLink.classList.add('active');
  } else {
    contactLink.classList.remove('active');
  }
}

window.onresize = () => {
  sticky = window.innerHeight;
};

window.onscroll = () => {
  navSticky();
  homeActive();
  aboutActive();
  portfolioActive();
  contactActive();
};

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('home', 'public/particles.json');