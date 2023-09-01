const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

const creatingElem = ingredients.map((value) => {
  const item = document.createElement("li");
  item.textContent = value;
  item.classList.add("item");
  return item;
});

list.append(...creatingElem);
// console.log(list);
