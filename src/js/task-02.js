const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.createElement("ul");
ingredients.forEach((item) => {
  const elem = document.createElement("li");
  elem.textContent = `${item}`;
  elem.classList.add("item");
  list.append(elem);
  // console.log(list)
});
const ingredient = document.getElementById("ingredients");
ingredient.insertAdjacentElement("beforeend", list);
console.log(list);
