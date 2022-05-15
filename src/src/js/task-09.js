const randColor = document.querySelector("body")
const changeBtn = document.querySelector(".change-color");
const colorBtn = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeBtn.addEventListener("click", () => {
randColor.style.backgroundColor = colorBtn.textContent = getRandomHexColor(randColor);
});
