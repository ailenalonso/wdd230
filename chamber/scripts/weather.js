const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("#weather-description");
const place = document.querySelector("#weather-location");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.52&lon=-58.53&units=imperial&appid=f45d3310006c3e747103fecf995bbd92";

async function apiFetch() {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();

      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  description.textContent = `${desc}`;
  place.textContent = `${data.name}, ${data.sys.country}`;
}

apiFetch();