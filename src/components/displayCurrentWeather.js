export default function displayCurrentWeather(data, isCel) {
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
