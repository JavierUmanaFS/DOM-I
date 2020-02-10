const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav

let links = document.getElementsByTagName('a');
links[0].innerText = siteContent['nav']['nav-item-1']
links[1].innerText = siteContent['nav']['nav-item-2']
links[2].innerText = siteContent['nav']['nav-item-3']
links[3].innerText = siteContent['nav']['nav-item-4']
links[4].innerText = siteContent['nav']['nav-item-5']
links[5].innerText = siteContent['nav']['nav-item-6']


let newText1 = document.createElement('a');
newText1.innerHTML = 'Team';

let newText2 = document.createElement('a');
newText2.innerHTML = 'Projects';

document.querySelector('nav').appendChild(newText1)
document.querySelector('nav').prepend(newText2)

document.querySelectorAll('a').forEach(e => e.style.color = 'green' )
// Cta

let title = document.querySelector('.cta-text h1')
title.innerText = siteContent['cta']['h1'];

let button = document.querySelector('.cta-text button')
button.innerHTML = siteContent['cta']['button'];

document.querySelector('.cta img').src = siteContent['cta']['img-src'];

// Main-content

let mainContent = document.querySelector('.main-content')

mainContent.querySelector('.top-content h4').innerHTML = siteContent['main-content']['features-h4'];

mainContent.querySelector('.top-content p').innerHTML = siteContent['main-content']['features-content'];

mainContent.querySelector('.top-content').lastElementChild.firstElementChild.innerHTML = siteContent['main-content']['about-h4'];

mainContent.querySelector('.top-content').lastElementChild.lastElementChild.innerHTML = siteContent['main-content']['about-content'];

mainContent.querySelector('img').src = siteContent['main-content']['middle-img-src'];

// let btmContent = document.querySelector('.bottom-content');

// btmContent.querySelector('.text-content h4').innerHTML = siteContent['main-content']['services-h4'];

// btmContent.querySelector('.text-content p').innerHTML = siteContent['main-content']['services-content'];

// btmContent.lastElementChild.firstElementChild.innerText = siteContent['main-content']['product-h4'];

// btmContent.lastElementChild.lastElementChild.innerText = siteContent['main-content']['product-content'];

let btmText = document.querySelectorAll('.bottom-content .text-content')

btmText[0].firstElementChild.innerText = siteContent['main-content']['services-h4']

btmText[0].lastElementChild.innerText = siteContent['main-content']['services-content']

btmText[1].firstElementChild.innerText = siteContent['main-content']['product-h4']

btmText[1].lastElementChild.innerText = siteContent['main-content']['product-content']

btmText[2].firstElementChild.innerText = siteContent['main-content']['vision-h4']

btmText[2].lastElementChild.innerText = siteContent['main-content']['vision-content']

document.querySelector('.contact h4').innerHTML = siteContent['contact']['contact-h4'];

let pS = document.querySelectorAll('.contact p')
console.log(pS);

pS[0].innerText = siteContent['contact']['address'];
pS[1].innerHTML = siteContent['contact']['phone'];
pS[2].innerHTML = siteContent['contact']['email'];

document.querySelector('footer p').innerHTML = siteContent['footer']['copyright'];