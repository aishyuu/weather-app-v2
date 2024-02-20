import displayInformation from "./displayInformation";

export default function displayTempButton(data, isCel) {
    const contentDiv = document.querySelector(".content");
    const changeTempButton = document.createElement("button");
    changeTempButton.classList.add("temp-change-btn");
    changeTempButton.textContent = "Change to C°";
  
    changeTempButton.addEventListener("click", () => {
      document.querySelector(".weather-current").remove();
      document.querySelector(".additional-info").remove();
      document.querySelector(".daily-forecast").remove();
  
      if (isCel) {
        changeTempButton.textContent = "Change to C°";
      } else {
        changeTempButton.textContent = "Change to F°";
      }
      isCel = !isCel;
      displayInformation(data, isCel);
    });
  
    contentDiv.appendChild(changeTempButton);
  }