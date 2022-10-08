const body = document.body;

const images = ["background1.avif", "background2.avif", "background3.avif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// bgImage.classList.add("bg-image");

const bgImageSrc = `imgs/${chosenImage}`;
console.log(bgImageSrc);
document.body.appendChild(bgImage);
body.style.backgroundImage = `url(${bgImageSrc})`;
