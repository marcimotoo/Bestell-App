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

function addToBasket(productId) {
  let findIndexFoodBasket = foodBasket.findIndex((basketProduct) => basketProduct.id === productId);

  if (findIndexFoodBasket === -1) {
    foodBasket.push({ id: productId, amount: 1 });
  } else {
    foodBasket[findIndexFoodBasket].amount = foodBasket[findIndexFoodBasket].amount + 1;
  }

  renderBasket();
}

function renderBasket() {
  const basketPoductsRef = document.getElementById('basket_products');
  basketPoductsRef.innerHTML = '';

  for (let basketIndex = 0; basketIndex < foodBasket.length; basketIndex++) {
    const basketProduct = foodBasket[basketIndex];
    const menuProduct = findPoductById(basketProduct.id);

    basketPoductsRef.innerHTML += basketArticleTemplate(basketProduct, menuProduct);
    console.log(menuProduct);
  }
}

function findPoductById(productId) {
  for (let i = 0; i < foodMenu.length; i++) {
    const menuProduct = foodMenu[i].products.find((product) => product.id === productId);

    if (menuProduct) {
      return menuProduct;
    }
  }
}
// renderBasket();
