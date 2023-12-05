function refreshWeather(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#formInput");
  searchCity(searchInput.value);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", citySearch);
