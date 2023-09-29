// Get the shopping cart container and initialize the cartItems array
const cartContainer = document.getElementById("cart-container");
let cartItems = [];

// Function to add product to cart
function addToCart(id, name, image, description, price) {
  const item = {
    id,
    name,
    image,
    description,
    price,
  };

  cartItems.push({
    product: item,
    imageSrc: item.image,
    quantity: 1,
  });

  // Update the cart UI
  renderCartItems();
};

// Function to remove a product from the cart
function removeFromCart(index) {
  // Remove the item from the cartItems array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  cartItems.splice(index, 1);

  // Update Add to Cart buttons
  updateAddToCartButtons();

  // Update the shopping cart UI
  renderCartItems();
};

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

// Update the "Add to cart" button text and disable it if the item is already in the cart
function updateAddToCartButtons() {
  addToCartButtons.forEach((button) => {
    const productId = button.dataset.id;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const existingItem = cartItems.find(
      (cartItem) => cartItem.product.id === productId
    );

    // they can also use a for or while loop, for example:
    // let existingItem;
    // for (i = 0; i < cartItems.length; i++) {
    //   if (cartItems[i].product.id === productId) {
    //     existingItem = cartItems[i];
    //   }
    // }

    if (existingItem) {
      button.disabled = true;
      button.textContent = `${existingItem.quantity} in cart`; // this is the same as existingItem.quantity + " in cart"
    } else {
      button.disabled = false;
      button.textContent = "Add to cart";
    }
  });
}

// Render the shopping cart items in the UI
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";
  const emptyCartContainer = document.getElementById("empty-cart-container");

  if (cartItems.length === 0) {
    // If the cart is empty, display the empty cart message
    emptyCartContainer.style.display = "flex";

    // Remove the total amount and label (if any)
    const cartTotalLabel = document.getElementById("cart-total-label");
    if (cartTotalLabel) cartTotalLabel.remove();
    const cartTotal = document.getElementById("cart-total");
    if (cartTotal) cartTotal.remove();
  } else {
    // hide the empty cart message
    emptyCartContainer.style.display = "none";

    // loop through the cart items and display them in the UI
    let total = 0;

    cartItems.forEach((cartItem, index) => {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("cart-item");

      const img = document.createElement("img");
      img.style = "width: 40px; height: 40px; margin-right: 10px;"
      img.src = cartItem.product.image;
      img.alt = cartItem.product.name;
      itemContainer.appendChild(img);

      const itemQuantity = document.createElement("span");
      itemQuantity.style = "min-width: 20px";
      itemQuantity.textContent = cartItem.quantity;
      itemContainer.appendChild(itemQuantity);

      const itemName = document.createElement("span");
      itemName.style = "white-space: nowrap; min-width: 200px";
      itemName.textContent = cartItem.product.name;
      itemContainer.appendChild(itemName);

      const itemDescription = document.createElement("span");
      itemDescription.style = "white-space: nowrap; min-width: 200px";
      itemDescription.textContent = cartItem.product.description;
      itemContainer.appendChild(itemDescription);

      const itemPrice = document.createElement("span");
      itemPrice.textContent = `$${(
        cartItem.product.price * cartItem.quantity
      ).toFixed(2)}`;
      itemContainer.appendChild(itemPrice);

      const removeButton = document.createElement("div");
      removeButton.style = "width: 100%; text-align: right;";
      const button = document.createElement("button");
      button.dataset.index = index;
      button.innerHTML = "&times;";
      button.setAttribute("onclick", "removeFromCart(this.dataset.index)");
      removeButton.appendChild(button);
      itemContainer.appendChild(removeButton);

      cartItemsContainer.appendChild(itemContainer);

      total += cartItem.product.price * cartItem.quantity;
    });

    if (cartItems.length >= 3) {
      window.poof();
    }

    // Add/update the total amount
    const cartTotal = document.getElementById("cart-total");

    if (!cartTotal) {
      const totalLine = document.createElement("div");
      const totalLabel = document.createElement("span");
      totalLabel.style = "padding-right: 10px";
      totalLabel.id = "cart-total-label";
      totalLabel.textContent = "Total:";
      totalLine.appendChild(totalLabel);

      const newCartTotal = document.createElement("span");
      newCartTotal.id = "cart-total";
      newCartTotal.textContent = `$${total.toFixed(2)}`;
      totalLine.appendChild(newCartTotal);

      const cartTotalContainer = document.getElementById(
        "cart-total-container"
      );
      cartTotalContainer.appendChild(totalLine);
    } else {
      cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    updateAddToCartButtons();
  }
}
