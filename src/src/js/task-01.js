const num = document.querySelectorAll('.item').length;
console.log("Number of categories:", num);

// const title = document.querySelector("h2");
// console.log("Category:",title.innerHTML);

// var elem = document.querySelectorAll('item').length;
// console.log("Elements:", elem);

const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};