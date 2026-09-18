const deleveryCost = 2.9;

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

function renderBasket() {
  const basketProductsRef = document.getElementById('basket_products');
  basketProductsRef.innerHTML = '';

  renderBasketProducts(basketProductsRef);
  updateBasketSummary();
}

function renderBasketProducts(basketProductsRef) {
  for (let basketIndex = 0; basketIndex < foodBasket.length; basketIndex++) {
    const basketProduct = foodBasket[basketIndex];
    const menuProduct = findProductById(basketProduct.id);

    basketProductsRef.innerHTML += basketArticleTemplate(basketProduct, menuProduct);
  }
}

function updateBasketSummary() {
  const totalAmount = calculateTotalAmount();
  const basketPrice = calculateTotalPrice();
  const totalPrice = basketPrice + deleveryCost;

  document.getElementById('basket_amount').innerHTML = totalAmount + ' Artikel';
  document.getElementById('basket_price').innerHTML = basketPrice.toFixed(2) + ' €';
  document.getElementById('basket_price_total').innerHTML = totalPrice.toFixed(2) + ' €';
}

function calculateTotalAmount() {
  let totalAmount = 0;

  for (let basketProduct of foodBasket) {
    totalAmount += basketProduct.amount;
  }

  return totalAmount;
}

function calculateTotalPrice() {
  let totalPrice = 0;

  for (let basketProduct of foodBasket) {
    const menuProduct = findProductById(basketProduct.id);
    totalPrice += menuProduct.price * basketProduct.amount;
  }

  return totalPrice;
}

function findProductById(productId) {
  for (let i = 0; i < foodMenu.length; i++) {
    const menuProduct = foodMenu[i].products.find((product) => product.id === productId);

    if (menuProduct) {
      return menuProduct;
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

function removeFromBasket(productId) {
  let findIndexFoodBasket = foodBasket.findIndex((basketProduct) => basketProduct.id === productId);

  if (findIndexFoodBasket >= 0) {
    foodBasket[findIndexFoodBasket].amount = foodBasket[findIndexFoodBasket].amount - 1;
    if (foodBasket[findIndexFoodBasket].amount <= 0) {
      foodBasket.splice(findIndexFoodBasket, 1);
    }
  }

  renderBasket();
}

function openOrderDialog() {
  document.getElementById('order_dialog').showModal();
  foodBasket.splice(0);
  renderBasket();
  document.getElementById('basket_price_total').innerHTML = '0.00 €';
}

function closeOrderDialog() {
  document.getElementById('order_dialog').close();
}
