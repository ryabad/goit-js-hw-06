function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector("div#boxes");
const creatingBoxes = document.querySelector("button[data-create]");
const destroingBoxes = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("input");

let valueOfNumber;

numberInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  valueOfNumber = Number(value);
});

creatingBoxes.addEventListener("click", () => {
  createBoxes(valueOfNumber);
  // console.log(valueQuantity);
  // console.log(typeof valueQuantity);
});

destroingBoxes.addEventListener("click", () => {
  box.textContent = "";
});

function createBoxes(amount) {
  if (amount > 100 || amount <= 0 || typeof amount === "undefined") {
    return alert("Number must be in range 1-100 (inclusive)");
  }

  const div = document.createElement("div");
  const colorValue = getRandomHexColor();
  div.classList.add(`item`);
  div.style.backgroundColor = `${colorValue}`;
  div.style.width = "30px";
  div.style.height = "30px";
  box.append(div);

  for (let i = 1; i < amount; i += 1) {
    const div = document.createElement("div");
    const colorValue = getRandomHexColor();
    const lastElement = box.lastChild;
    div.classList.add(`item`);
    div.style.backgroundColor = `${colorValue}`;
    div.style.width = parseInt(lastElement.style.width) + 10 + "px";
    div.style.height = parseInt(lastElement.style.height) + 10 + "px";
    box.append(div);
  }
}
