
//Dates
let date = new Date();

let currentYear = date.getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


let lastModified = new Date(document.lastModified);

let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});

let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});

let dateTime = `Last Updated: ${fullDate} ${time}`;

document.querySelector("#lastModified").textContent = dateTime;

//Lazy Load Animation
const images = document.querySelectorAll("[data-src");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

function preloadImg(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImg(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});


