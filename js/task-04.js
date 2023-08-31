let counterValue = 0;
const counterChanges = document.querySelector("#value");

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counterChanges.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counterChanges.textContent = counterValue;
});
