let counterValue = 0;

let incrementBtn = document.querySelector('[data-action="increment"]');
let decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
 document.querySelector("#value").textContent = counterValue;
});
