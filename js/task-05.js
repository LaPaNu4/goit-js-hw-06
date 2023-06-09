// напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const nameInp = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
nameInp.addEventListener("input", (event) => {
  const name = event.target.value.trim();
  if (name) {
    nameOut.textContent = name;
  } else {
    nameOut.textContent = "Anonymous";
  }
});
