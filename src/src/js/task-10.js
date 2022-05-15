function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const newBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
 
  }


// const makeListBoxes = options => {
//   return options.map(option => {
//     const elements = document.createElement("div");
//     elements.classList.add("box-item");
//     // elements.textContent = option;
//     // return elements;
//   });
// }
// makeListBoxes.append(elements)