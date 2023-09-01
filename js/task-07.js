const controller = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

controller.addEventListener("input", changeFontSize);

function changeFontSize() {
  const fontSizeValue = controller.value;
  text.style.fontSize = fontSizeValue + "px";
}

changeFontSize();
