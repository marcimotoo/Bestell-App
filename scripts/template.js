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
          <button onclick="addToBasket(${foodMenu[categoryIndex].products[productIndex].id}, ${categoryIndex}, ${productIndex})" id="add-to-basket">
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

function basketArticleTemplate(categoryIndex, productIndex) {
  return /*html*/ `
    <article class="basket-card">
                <img src="${foodMenu[categoryIndex].products[productIndex].src}" alt="${foodMenu[categoryIndex].products[productIndex].alt}" />
                <div class="title-price">
                  <h5>${foodMenu[categoryIndex].products[productIndex].name}</h5>
                  <p>1 × ${foodMenu[categoryIndex].products[productIndex].price.toFixed(2)} €</p>
                </div>
                <div class="number-box">
                  <div class="minus-number-plus">
                    <button class="svg-center" aria-label="Green Power Bowl Anzahl verringern">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <p>1</p>
                    <button class="svg-center" aria-label="Green Power Bowl Anzahl erhöhen">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>
                  <h4>${foodMenu[categoryIndex].products[productIndex].price.toFixed(2)} €</h4>
                </div>
              </article>
            </div>
  `;
}
