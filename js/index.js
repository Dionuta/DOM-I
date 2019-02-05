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

//Task 2

//header
const navigation = document.querySelectorAll('a');
for (let i = 0; i < navigation.length; i++) {
    navigation[i].textContent = siteContent["nav"][`nav-item-${i + 1}`]; 
    navigation[i].style.color = "green";
}

//prepend
const something = document.createElement("a");
const somethingText = document.createTextNode("Something");
something.prepend(somethingText);
something.style.color = "green";
document.querySelector("nav").prepend(something);

//append
const somethingElse = document.createElement("a");
const somethingElseText = document.createTextNode("Something Else");
somethingElse.prepend(somethingElseText);
somethingElse.style.color = "green";
document.querySelector("nav").appendChild(somethingElse);








//cta
const h1 = document.querySelector('h1');
h1.textContent = siteContent["cta"]["h1"]; 
h1.innerHTML = 'DOM<br>Is<br>Awesome';



const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"]; 

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


//main-content
const multipleH = document.querySelectorAll('h4');
multipleH[0].textContent = siteContent["main-content"]["features-h4"]; 
multipleH[1].textContent = siteContent["main-content"]["about-h4"]; 
multipleH[2].textContent = siteContent["main-content"]["services-h4"]; 
multipleH[3].textContent = siteContent["main-content"]["product-h4"]; 
multipleH[4].textContent = siteContent["main-content"]["vision-h4"]; 

const multipleP = document.querySelectorAll('p');
multipleP[0].textContent = siteContent["main-content"]["features-content"]; 
multipleP[1].textContent = siteContent["main-content"]["about-content"]; 
multipleP[2].textContent = siteContent["main-content"]["services-content"]; 
multipleP[3].textContent = siteContent["main-content"]["product-content"]; 
multipleP[4].textContent = siteContent["main-content"]["vision-content"]; 

const mid = document.getElementById("middle-img");
mid.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//contact

multipleH[5].textContent = siteContent["contact"]["contact-h4"]; 

multipleP[5].textContent = siteContent["contact"]["address"];
multipleP[6].textContent = siteContent["contact"]["phone"];
multipleP[7].textContent = siteContent["contact"]["email"];

//footer

multipleP[8].textContent = siteContent["footer"]["copyright"];
