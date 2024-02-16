import logo from "../images/weather_icon.png";

export default function header() {
  const headerDiv = document.querySelector(".header");

  const headerImage = document.createElement("img");
  headerImage.src = logo;
  headerImage.classList.add("header-image");

  headerDiv.appendChild(headerImage);

  const sourceLink = 

  headerDiv.appendChild(headerTempButton);
}
