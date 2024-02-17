import loading from "../images/loading.gif";
import moment from "moment";

function getInitialData(contentDiv) {
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=2b7803e6e34f4d32b87101848240902&q=Los Angeles&days=3&aqi=no&alerts=no",
  )
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      loadingDiv.remove();
      const isCel = false;
      displayTempButton(response, isCel);
      displayInformation(response, isCel);
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

function displayTempButton(data, isCel) {
  const contentDiv = document.querySelector(".content");
  const changeTempButton = document.createElement("button");
  changeTempButton.classList.add("temp-change-btn");
  changeTempButton.textContent = "Change to C°";

  changeTempButton.addEventListener("click", () => {
    document.querySelector(".weather-current").remove();
    document.querySelector(".additional-info").remove();

    if (isCel) {
      changeTempButton.textContent = "Change to C°";
    } else {
      changeTempButton.textContent = "Change to F°";
    }
    isCel = !isCel;
    displayInformation(data, isCel);
  });

  contentDiv.appendChild(changeTempButton);
}

function displayInformation(data, isCel) {
  displayCurrentWeather(data, isCel);
  displayHourlyForcast(data, isCel);
  displayAdditionalInfo(data, isCel);
}

function displayCurrentWeather(data, isCel) {
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
  if (isCel) {
    weatherTemp.textContent = `${currentData.temp_c}°`;
  } else {
    weatherTemp.textContent = `${currentData.temp_f}°`;
  }
  currentWeatherImgTempDiv.appendChild(weatherTemp);

  currentWeatherBigInfo.appendChild(currentWeatherImgTempDiv);

  currentWeatherAllDiv.appendChild(currentWeatherBigInfo);
  contentDiv.appendChild(currentWeatherAllDiv);
}

function displayHourlyForcast(data, isCel) {
  const hourlyForecast = data.forecast.forecastday[0].hour;
  const currentWeatherAllDiv = document.querySelector(".weather-current");

  const hourForecastDiv = document.createElement("div");
  hourForecastDiv.classList.add("hourly-forecast");

  for (let index = 0; index < hourlyForecast.length; index++) {
    const element = hourlyForecast[index];
    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hour-forecast");

    const hourTime = document.createElement("p");
    hourTime.classList.add("hour-time");
    hourTime.textContent = moment.unix(element.time_epoch).format("hh:mm A");
    hourDiv.appendChild(hourTime);

    const hourImg = document.createElement("img");
    hourImg.classList.add("hour-icon");
    hourImg.src = `https:${element.condition.icon}`;
    hourDiv.appendChild(hourImg);

    const hourTemp = document.createElement("p");
    hourTemp.classList.add("hour-temp");
    if (isCel) {
      hourTemp.textContent = `${element.temp_c}°`;
    } else {
      hourTemp.textContent = `${element.temp_f}°`;
    }

    hourDiv.appendChild(hourTemp);

    hourForecastDiv.appendChild(hourDiv);
  }

  currentWeatherAllDiv.appendChild(hourForecastDiv);
}

function displayAdditionalInfo(data, isCel) {
  const content = document.querySelector(".content");
  const additionalInfo = document.createElement("div");
  additionalInfo.classList.add("additional-info");

  console.log(data);

  const feelsLike = document.createElement("p");
  feelsLike.classList.add("feels-like-text");
  if (isCel) {
    feelsLike.textContent = `Feels Like: ${data.current.feelslike_c}°`;
  } else {
    feelsLike.textContent = `Feels Like: ${data.current.feelslike_f}°`;
  }

  additionalInfo.appendChild(feelsLike);

  content.appendChild(additionalInfo);
}

export default function content() {
  const contentDiv = document.querySelector(".content");
  getInitialData(contentDiv);
}
