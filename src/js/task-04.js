// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
let counterValue = 0;

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
{
  /* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */
}
const less = document.querySelector('[data-action="decrement"]');
const more = document.querySelector('[data-action="increment"]');
const content = document.querySelector("#value");

less.addEventListener("click", () => {
  counterValue -= 1;
  content.textContent = counterValue;
});
more.addEventListener("click", () => {
  counterValue += 1;
  content.textContent = counterValue;
});
