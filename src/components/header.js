import logo from "../images/weather_icon.png";
import github from "../images/github.png";

export default function header() {
  const headerDiv = document.querySelector(".header");

  const headerImage = document.createElement("img");
  headerImage.src = logo;
  headerImage.classList.add("header-image");
  headerDiv.appendChild(headerImage);

  const sourceLink = document.createElement("a");
  sourceLink.classList.add("header-github-div");
  sourceLink.href = "https://github.com/aishyuu/weather-app-v2"
  sourceLink.target = "_blank"
  
  const sourceImage = document.createElement("img");
  sourceImage.src = github;
  sourceImage.classList.add("header-source-image")
  sourceLink.appendChild(sourceImage);

  headerDiv.appendChild(sourceLink);
}
