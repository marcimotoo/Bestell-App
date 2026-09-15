function init() {
  renderSection();
}

function renderSection() {
  for (let categoryIndex = 0; categoryIndex < foodMenu.length; categoryIndex++) {
    const foodSectionRef = document.getElementById('food_section');
    foodSectionRef.innerHTML += foodCategoryTemplate(categoryIndex);
    for (let productIndex = 0; productIndex < foodMenu[categoryIndex].products.length; productIndex++) {
      const foodCategoryRef = document.getElementById('food_card' + categoryIndex);
      foodCategoryRef.innerHTML += foodCardsTemplate(categoryIndex, productIndex);
    }
  }
}
