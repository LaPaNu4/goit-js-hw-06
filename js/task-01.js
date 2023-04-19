// Напиши скрипт, який:

// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categories = document.getElementById("categories");
const mainItem = [...categories.children];
console.log(`Number of categories: ${mainItem.length}`);
// console.dir(mainItem);

// 2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
mainItem.forEach((category) => {
  const title = category.firstElementChild.textContent;
  // const count = category.querySelectorAll("li").length;
  const count = category.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
  //   console.log(`Категорія: ${title} / Кількість елементів: ${count}`);
});
// function magic(array) {
//   array.forEach((childLi) => {
//     const nameCateg = childLi.firstElementChild.textContent;
//     console.log(nameCateg);
//   });
// }

//  Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
