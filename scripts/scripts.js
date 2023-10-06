
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

//Dark Mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});

//Number of visits
const visits = document.querySelector(".number-of-visits");
let numberOfVisits = Number(window.localStorage.getItem("numberOfVisits-ls")) || 0;

if (numberOfVisits !== 0) {
  visits.textContent = numberOfVisits;
} else {
  visits.textContent = `0`;
}

numberOfVisits++;
localStorage.setItem("numberOfVisits-ls", numberOfVisits);

//Match passwords
const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password-confirmation");
const message = document.querySelector("#form-message");

p2.addEventListener("focusout", checkSame);

function checkSame() {
  if (p1.value !== p2.value) {
    message.textContent = "Passwords do not match";
    message.style.color = "#d33b3b";
    p2.style.color = "#000000";
    p2.style.backgroundColor = "#ffd8d8";
    p1.value = "";
    p2.value = "";
    p1.focus();
  } else {
    message.textContent = "No errors to report";
    message.style.color = "#3a823a";
    p2.style.color = "#000000";
    p2.style.backgroundColor = "#ffffff";
  }
}
