let lastModified = new Date(document.lastModified);

let fullDate = lastModified.toLocaleString("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});

let time = lastModified.toLocaleString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

let dateTime = `Last Updated: ${fullDate} ${time}`;

document.querySelector("#lastModified").textContent = dateTime;

//Hamburger Menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

/*Progressive "lazy" loading*/
const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};


const loadImages = (image) => {
    if (image.getAttribute("src")){
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
    }
    else
    {
        image.setAttribute("srcset", image.getAttribute("data-src"));
    }
};

if("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    images.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {
}