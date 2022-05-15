const sizeControl = document.querySelector("#font-size-control");
const textChanges = document.querySelector("#text");

sizeControl.addEventListener("input", () => {
    textChanges.style.fontSize = sizeControl.value + "px";
})