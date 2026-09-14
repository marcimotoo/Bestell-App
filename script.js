let currentCategoryIndex = 0;

function init() {
  renderFoodMenu();
}

function renderFoodMenu() {
  const foodMenuSectionRef = document.getElementById('food_cards');

  for (let categoryIndex = 0; categoryIndex < foodMenu.length; categoryIndex++) {
    for (let productIndex = 0; productIndex < foodMenu[categoryIndex].products.length; productIndex++) {
      foodMenuSectionRef.innerHTML += foodCardTemplate(categoryIndex, productIndex);
    }
  }
}
