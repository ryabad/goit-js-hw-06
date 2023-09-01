const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
  const listValue = element.firstElementChild.textContent;
  const numbersOfValues = element.lastElementChild.children.length;
  console.log(`Category: ${listValue}`);
  console.log(`Elements: ${numbersOfValues}`);
});
