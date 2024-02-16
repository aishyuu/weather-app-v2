import logo from "../images/weather_icon.png";
import github from "../images/github.png";

export default function header() {
  const headerDiv = document.querySelector(".header");

  // Image
  const headerImage = document.createElement("img");
  headerImage.src = logo;
  headerImage.classList.add("header-image");
  headerDiv.appendChild(headerImage);

  const locationForm = document.createElement("form");
  locationForm.classList.add("location-form")
  const locationInput = document.createElement("input");
  locationInput.classList.add("location-input")
  locationInput.placeholder = "Enter a city"
  locationForm.appendChild(locationInput);
  const locationSubmit = document.createElement("button");
  locationSubmit.classList.add("location-submit-btn")
  locationSubmit.type = "submit";
  locationSubmit.textContent = "Search";
  locationForm.appendChild(locationSubmit);
  headerDiv.appendChild(locationForm);

  // Github Link
  const sourceLink = document.createElement("a");
  sourceLink.classList.add("header-github-div");
  sourceLink.href = "https://github.com/aishyuu/weather-app-v2";
  sourceLink.target = "_blank";
  //Github Image
  const sourceImage = document.createElement("img");
  sourceImage.src = github;
  sourceImage.classList.add("header-source-image");
  sourceLink.appendChild(sourceImage);

  headerDiv.appendChild(sourceLink);

  locationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
  })
}
