const categoriesRef = document.querySelector("#categories");
const itemsRef = document.querySelectorAll(".item");
console.log(`В списке: ${categoriesRef.children.length} категории.`);

const getTitleAndItemAmount = categories =>
  categories.forEach(category => {
    console.log(
      `Категория: ${category.firstElementChild.textContent}. Количество элементов: ${category.lastElementChild.children.length}.`
    );
  });
getTitleAndItemAmount(itemsRef);
