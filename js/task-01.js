const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
  // const categoriesName = element.querySelector("h2");
  // const subList = element.querySelectorAll("ul li");
  const categoriesName = element.firstElementChild;
  const subList = element.lastElementChild.children;
  console.log(`Category: ${categoriesName.textContent}`);
  console.log(`Elements: ${subList.length}`);
});
