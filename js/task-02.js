const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");
const arrayOfElements = [];

ingredients.forEach((value) => {
  const item = document.createElement("li");
  item.textContent = value;
  item.classList.add("item");
  arrayOfElements.push(item);
});
// console.log(arrayOfElements);
list.append(...arrayOfElements);
// console.log(list);
