let daysBetweenVisits = Number(window.localStorage.getItem("last-visit-ls"));

let timeStamp = Date.now();
let findDaysBetween = timeStamp;

if (daysBetweenVisits !== 0){
    findDaysBetween -= daysBetweenVisits;
    findDaysBetween = Math.round(findDaysBetween / (1000*60*60*24));
    if (findDaysBetween < 1){
        document.getElementById("daysBetweenVisits").textContent = "Back so soon! Awesome!";
    }
    else{
        document.getElementById("daysBetweenVisits").textContent = `Last Visit: ${findDaysBetween} day(s) ago.`;
    }
}
else {
    document.getElementById("daysBetweenVisits").innerHTML = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("last-visit-ls", timeStamp);