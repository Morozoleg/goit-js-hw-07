const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsListRef = document.querySelector("#ingredients");
const createIngredient = ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
};
const items = ingredients.map(ingredient => createIngredient(ingredient));

ingredientsListRef.append(...items);
