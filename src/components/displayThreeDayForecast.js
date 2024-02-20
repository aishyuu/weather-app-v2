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
    console.log(element);

    const dailyDate = document.createElement("p");
    dailyDate.classList.add("day-date");
    dailyDate.textContent = moment.unix(element.date_epoch).format("MMM D");
    dailyDiv.appendChild(dailyDate);

    const dailyImage = document.createElement("img");
    dailyImage.classList.add("day-img");
    dailyImage.src = `https:${element.day.condition.icon}`;
    dailyDiv.appendChild(dailyImage);

    const dailyTemp = document.createElement("p");
    dailyTemp.classList.add("day-temp");
    if (isCel) {
        dailyTemp.textContent = `${element.day.avgtemp_c}`
    } else {
        dailyTemp.textContent = `${element.day.avgtemp_f}°`
    }
    dailyDiv.appendChild(dailyTemp);
    
    const dailyRainChance = document.createElement("p");
    dailyRainChance.classList.add("day-rain");
    dailyRainChance.textContent = `Rain %: ${element.day.daily_chance_of_rain}`
    dailyDiv.appendChild(dailyRainChance)

    forecastDiv.appendChild(dailyDiv);
  }

  contentDiv.appendChild(forecastDiv);
}
