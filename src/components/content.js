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

  const weatherImage = document.createElement("img");
  weatherImage.src = `https:${currentData.condition.icon}`;

  contentDiv.appendChild(weatherImage)
}

export default function content() {
  const contentDiv = document.querySelector(".content");
  getInitialData(contentDiv);
}
