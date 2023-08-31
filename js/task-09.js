function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleButton = document.querySelector(".widget button.change-color");
const colorTextOutput = document.querySelector(".widget span.color");
const bodyArea = document.querySelector("body");

handleButton.addEventListener("click", () => {
  const colorValue = getRandomHexColor();
  colorTextOutput.textContent = colorValue;
  bodyArea.style.backgroundColor = `${colorValue}`;
});
