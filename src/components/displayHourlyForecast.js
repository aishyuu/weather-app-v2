import moment from "moment";

export default function displayHourlyForcast(data, isCel) {
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
