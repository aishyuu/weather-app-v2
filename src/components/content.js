import loading from "../images/loading.gif";

function getInitialData(contentDiv) {
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=2b7803e6e34f4d32b87101848240902&q=London&days=1&aqi=no&alerts=no",
  )
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      console.log(response);
      loadingDiv.remove();
      displayInformation(response);
    });

  const loadingDiv = displayLoadingImage();
}

function displayLoadingImage() {
  const contentDiv = document.querySelector(".content");
  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add("loading-div");

  const loadingImage = document.createElement("img");
  loadingImage.classList.add("loading-img");
  loadingImage.src = loading;

  loadingDiv.appendChild(loadingImage);
  contentDiv.appendChild(loadingDiv);

  return loadingDiv;
}

function displayInformation(data) {
  displayCurrentWeather(data);
}

function displayCurrentWeather(data) {
  const contentDiv = document.querySelector(".content");
  const currentData = data.current;
  const currentWeatherAllDiv = document.createElement("div");
  currentWeatherAllDiv.classList.add("weather-current");

  const currentWeatherBigInfo = document.createElement("div");
  currentWeatherBigInfo.classList.add("weather-current-big");

  const currentWeatherCity = document.createElement("p");
  currentWeatherCity.classList.add("weather-current-city");
  currentWeatherCity.textContent = `${data.location.name}, ${data.location.country}`;
  currentWeatherBigInfo.appendChild(currentWeatherCity);

  const currentWeatherImgTempDiv = document.createElement("div");
  currentWeatherImgTempDiv.classList.add("weather-current-imgtemp");

  const weatherImage = document.createElement("img");
  weatherImage.classList.add("weather-current-img");
  weatherImage.src = `https:${currentData.condition.icon}`;
  currentWeatherImgTempDiv.appendChild(weatherImage);

  const weatherTemp = document.createElement("h1");
  weatherTemp.classList.add("weather-current-temp");
  weatherTemp.textContent = `°${currentData.temp_f}`;
  currentWeatherImgTempDiv.appendChild(weatherTemp);

  currentWeatherBigInfo.appendChild(currentWeatherImgTempDiv);

  currentWeatherAllDiv.appendChild(currentWeatherBigInfo);
  contentDiv.appendChild(currentWeatherAllDiv);
}

export default function content() {
  const contentDiv = document.querySelector(".content");
  getInitialData(contentDiv);
}
