const controller = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

controller.addEventListener("input", (event) => {
  const fontSizeValue = event.currentTarget.value;
  text.style.fontSize = fontSizeValue + "px";
});
