const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.createElement("ul");
ingredients.map((item) => {
  const elem = document.createElement("li");
  elem.textContent = `${item}`;
  elem.classList.add("item");
  list.append(elem);
  // console.log(list)
});
const ingredient = document.getElementById("ingredients");
// ingredient.insertAdjacentElement("beforeend", list);
ingredient.append(list);

console.log(list);
