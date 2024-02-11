import "./style.css";
import "./reset.css";

function component() {
  const body = document.querySelector("body");
  const element = document.createElement("div");
  element.classList.add("welcome")
  const text = document.createElement("h1");
  text.classList.add("main-text")
  text.innerText = "Thank you for using Marrow!";

  const subtext = document.createElement("a");
  subtext.href = "https://github.com/aishyuu/marrow"
  subtext.target = "_blank"
  subtext.innerText = "Getting Started"
  subtext.classList.add("sub-text")


  element.appendChild(text);
  element.appendChild(subtext)
  body.appendChild(element);
}

component();
