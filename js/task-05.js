const inputText = document.querySelector("input#name-input");
const textOutput = document.querySelector("span#name-output");

/* -------------------first-------------------
inputText.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() !== "") {
    textOutput.textContent = event.currentTarget.value.trim();
  } else {
    textOutput.textContent = "Anonymous";
  }
});
*/

// -------------------second-------------------
inputText.addEventListener("input", handleInput);

function handleInput(event) {
  if (event.currentTarget.value.trim() !== "") {
    textOutput.textContent = event.currentTarget.value.trim();
  } else {
    textOutput.textContent = "Anonymous";
  }
}
