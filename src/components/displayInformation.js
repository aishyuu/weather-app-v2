import displayAdditionalInfo from "./displayAdditionalInfo";
import displayCurrentWeather from "./displayCurrentWeather";
import displayHourlyForcast from "./displayHourlyForecast";
import displayThreeDayForecast from "./displayThreeDayForecast";

export default function displayInformation(data, isCel) {
  displayCurrentWeather(data, isCel);
  displayHourlyForcast(data, isCel);
  displayAdditionalInfo(data, isCel);
  displayThreeDayForecast(data, isCel);
}
