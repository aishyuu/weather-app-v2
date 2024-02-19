import loading from "../images/loading.gif";

import displayCurrentWeather from "./displayCurrentWeather";
import displayHourlyForcast from "./displayHourlyForecast";
import displayAdditionalInfo from "./displayAdditionalInfo";
import displayThreeDayForecast from "./displayThreeDayForecast";

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
  displayThreeDayForecast(data, isCel);
}

export default function content() {
  const contentDiv = document.querySelector(".content");
  getInitialData(contentDiv);
}
