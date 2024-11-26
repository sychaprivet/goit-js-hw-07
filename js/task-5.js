function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

const colorChange = () => {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  colorText.textContent = color;
};

buttonColor.addEventListener("click", colorChange);
