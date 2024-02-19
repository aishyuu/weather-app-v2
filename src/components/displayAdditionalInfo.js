export default function displayAdditionalInfo(data, isCel) {
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

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${data.current.humidity}`;
  additionalInfo.appendChild(humidity);

  const wind = document.createElement("p");
  wind.textContent = `Wind: ${data.current.wind_dir} ${data.current.wind_degree}°`;
  additionalInfo.appendChild(wind);

  const windSpeed = document.createElement("p");
  windSpeed.textContent = `Wind Speed: ${data.current.wind_mph}mph`;
  additionalInfo.appendChild(windSpeed);

  content.appendChild(additionalInfo);
}
