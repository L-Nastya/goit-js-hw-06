const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const makeIngredientsContainer = document.querySelector('#ingredients')
const makeListIngredients = options => {
  return options.map(option => {
    const elements = document.createElement("li");
    elements.classList.add("item");
    elements.textContent = option;
    return elements;
  });
};
const newIng = makeListIngredients(ingredients);
makeIngredientsContainer.append(...newIng);