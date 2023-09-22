
//Dates
let date = new Date();

let currentYear = date.getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


let lastModified = new Date(document.lastModified);

let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});

let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});

let dateTime = `Last Updated: ${fullDate} ${time}`;

document.querySelector("#lastModified").textContent = dateTime;

//Hamburger Menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;