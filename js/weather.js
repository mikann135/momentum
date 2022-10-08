const city = document.querySelector(".weather span:last-child");
const weather = document.querySelector(".weather span:first-child");

const API_KEY = "42f99511a129bb07b6d2796c619ff5cb";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      console.log(data.name);
      console.log(data.weather[0].main);
    });
}
function onGeoErr() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
