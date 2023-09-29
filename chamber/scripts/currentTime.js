let date1 = document.getElementById("currentTime");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en", {dateStyle: "full"}).format(now);
date1.innerHTML = fulldate;