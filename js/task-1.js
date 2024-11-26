const categories = document.querySelector("#categories");
const numberCategories = categories.children.length;
console.log("Number of categories:", numberCategories);

const category = document.querySelectorAll(".item");
category.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryLength = category.lastElementChild.children.length;
  console.log("Category:", categoryName);
  console.log("Elements:", categoryLength);
});
