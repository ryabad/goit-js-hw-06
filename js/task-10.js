function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector("div#boxes");
const creatingBoxes = document.querySelector("button[data-create]");
const destroingBoxes = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("input");

const minNumber = Number(numberInput.min);
const maxNumber = Number(numberInput.max);
// const stepNumber = Number(numberInput.step);

let valueOfNumber;

numberInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  valueOfNumber = Number(value);
});

creatingBoxes.addEventListener("click", () => {
  const appends = createBoxes(valueOfNumber);
  if (typeof appends !== "undefined") {
    box.append(...appends);
  }
  // console.log(valueQuantity);
  // console.log(typeof valueQuantity);
});

destroingBoxes.addEventListener("click", () => {
  box.textContent = "";
  numberInput.value = "";
});

function createBoxes(amount) {
  if (
    amount > maxNumber ||
    amount < minNumber ||
    typeof amount === "undefined"
  ) {
    return alert("Number must be in range 1-100 (inclusive)");
  }

  const arrayOfDivs = [];

  const div = document.createElement("div");
  const colorValue = getRandomHexColor();
  div.classList.add(`item`);
  div.style.backgroundColor = `${colorValue}`;
  div.style.width = "30px";
  div.style.height = "30px";
  arrayOfDivs.push(div);

  for (let i = 1; i < amount; i += 1) {
    const div = document.createElement("div");
    const colorValue = getRandomHexColor();
    const lastElement = arrayOfDivs[arrayOfDivs.length - 1];
    div.classList.add(`item`);
    div.style.backgroundColor = `${colorValue}`;
    div.style.width = parseInt(lastElement.style.width) + 10 + "px";
    div.style.height = parseInt(lastElement.style.height) + 10 + "px";
    arrayOfDivs.push(div);
  }
  return arrayOfDivs;
}
