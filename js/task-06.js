const inputText = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length="6"]');

inputText.addEventListener("input", () => {
  inputText.classList.remove("valid", "invalid");
});

inputText.addEventListener("blur", (event) => {
  const inputedText = event.currentTarget.value;
  if (Number(inputLength.dataset.length) === inputedText.length) {
    inputText.classList.add("valid");
  } else {
    inputText.classList.add("invalid");
  }
});
