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

function addToBasket(pruductId, categoryIndex, productIndex) {
  const basketPoductsRef = document.getElementById('basket_products');
  console.log(pruductId); // id wird übergeben
  console.log(categoryIndex); // categoryIndex wird übergeben
  console.log(productIndex); // pruducIndex wird übergeben
  console.log(foodMenu[categoryIndex].products[productIndex].name);

  basketPoductsRef.innerHTML += basketArticleTemplate(categoryIndex, productIndex);
}
