function foodCategoryTemplate(categoryIndex) {
  return /*html*/ `
  <div class="category">
    <h2>${foodMenu[categoryIndex].category}</h2>
    <p>${foodMenu[categoryIndex].categoryDescription}</p>
  </div>
  <div id="food_card${categoryIndex}"></div>
    `;
}

function foodCardsTemplate(categoryIndex, productIndex) {
  return /*html*/ `
    <article class="food-article">
      <div class="food-picture">
        <img src="${foodMenu[categoryIndex].products[productIndex].src}" alt="${foodMenu[categoryIndex].products[productIndex].alt}" />
      </div>
      <div class="title-description-price">
        <h4>${foodMenu[categoryIndex].products[productIndex].name}</h4>
        <p>${foodMenu[categoryIndex].products[productIndex].description}</p>
        <div class="price-and-add-to-basket">
          <b>${foodMenu[categoryIndex].products[productIndex].price.toFixed(2)}€</b>
          <button onclick="addToBasket(${foodMenu[categoryIndex].products[productIndex].id},${categoryIndex})" id="add-to-basket">
            <svg
            class="center-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      </div>
    </div>
  </article>`;
}

function basketArticleTemplate(basketProduct, menuProduct) {
  return /*html*/ `
    <article class="basket-card">
                <img src="${menuProduct.src}" alt="${menuProduct.alt}" />
                <div class="title-price">
                  <h5>${menuProduct.name}</h5>
                  <p>1 × ${menuProduct.price.toFixed(2)} €</p>
                </div>
                <div class="number-box">
                  <div class="minus-number-plus">
                    <button onclick="removeFromBasket(${basketProduct.id})" class="svg-center" aria-label="Green Power Bowl Anzahl verringern">
                    ${
                      basketProduct.amount === 1
                        ? /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" 
                        width="24"
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>`
                        : /*html*/ `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M5 12h14" />
                      </svg>`
                    }
                    </button>
                    <p>${basketProduct.amount}</p>
                    <button onclick="addToBasket(${basketProduct.id})" class="svg-center" aria-label="Green Power Bowl Anzahl erhöhen">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>
                  <h4>${(menuProduct.price * basketProduct.amount).toFixed(2)} €</h4>
                </div>
              </article>
  `;
}
