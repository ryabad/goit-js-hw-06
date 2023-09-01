const inputText = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length="6"]');

// inputText.addEventListener("input", () => {
//   inputText.classList.remove("valid", "invalid");
// });

/*----------first----------
inputText.addEventListener("blur", (event) => {
  const inputedText = event.currentTarget.value.trim();
  if (Number(inputLength.dataset.length) === inputedText.length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});
*/

//----------second----------
inputText.addEventListener("blur", handleInput);

function handleInput(event) {
  const inputedText = event.currentTarget.value.trim();
  if (Number(inputLength.dataset.length) === inputedText.length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
}
