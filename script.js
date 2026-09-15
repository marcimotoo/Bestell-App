function init() {
  renderSection();
}

function renderSection() {
  const foodSectionRef = document.getElementById('food_section');

  for (let categoryIndex = 0; categoryIndex < foodMenu.length; categoryIndex++) {
    foodSectionRef.innerHTML += foodCategoryTemplate(categoryIndex);
  }
  renderFoodCard(categoryIndex);
}

function renderFoodCard(categoryIndex) {
  const foodCategoryRef = document.getElementById('food_category' + categoryIndex);
  for (let productIndex = 0; productIndex < foodMenu[categoryIndex].products.length; productIndex++) {
    foodCategoryRef.innerHTML += foodCardsTemplate(categoryIndex, productIndex);
  }
}
