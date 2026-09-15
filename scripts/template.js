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
    <article>
      <img src="${foodMenu[categoryIndex].products[productIndex].src}" alt="${foodMenu[categoryIndex].products[productIndex].alt}" />
      <div class="title-description-price">
        <h4>${foodMenu[categoryIndex].products[productIndex].name}</h4>
        <p>${foodMenu[categoryIndex].products[productIndex].description}</p>
        <div class="price-and-add-to-basket">
          <b>${foodMenu[categoryIndex].products[productIndex].price.toFixed(2)}€</b>
          <button id="add-to-basket">
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
