import moment from "moment";

export default function displayThreeDayForecast(data, isCel) {
  const contentDiv = document.querySelector(".content");
  const forecastData = data.forecast.forecastday;
  const forecastDiv = document.createElement("div");
  forecastDiv.classList.add("daily-forecast");

  for (let index = 0; index < forecastData.length; index++) {
    const element = forecastData[index];
    const dailyDiv = document.createElement("div");
    dailyDiv.classList.add("day-forecast");

    const dailyDate = document.createElement("p");
    dailyDate.classList.add("day-date");
    dailyDate.textContent = moment.unix(element.date_epoch).format("MMM D");
    dailyDiv.appendChild(dailyDate);

    forecastDiv.appendChild(dailyDiv);
  }

  contentDiv.appendChild(forecastDiv);
}
