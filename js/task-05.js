const inputText = document.querySelector("input#name-input");
const textOutput = document.querySelector("span#name-output");

inputText.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    textOutput.textContent = event.currentTarget.value;
  } else {
    textOutput.textContent = "Anonymous";
  }
});
