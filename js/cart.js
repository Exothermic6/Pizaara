console.log("My Name is Alfred");
const counter = document.getElementById("counter");
const cartPreview = document.getElementById("cart-preview");

const addToCart = document.querySelectorAll(".add-to-cart");
const cartItems = [];
console.log(addToCart);

addToCart.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.textContent === "Add to Cart") {
      console.log(e.target.parentElement.children[0].getAttribute("src"));
      const pizzaImage = e.target.parentElement.children[0].getAttribute("src");
      const pizzaName = e.target.parentElement.children[1].children[0];
      const pizzaFilling = e.target.parentElement.children[1].children[1];
      const pizzaPrice = parseInt(
        e.target.parentElement.children[1].children[2].dataset.price
      );
      console.log(pizzaName.textContent);
      // console.log(pizzaFilling.textContent);
      console.log(pizzaPrice);
      const pizzaItems = {
        pizzaName: pizzaName.textContent,
        pizzaImage: pizzaImage,
        pizzaFilling: pizzaFilling.textContent,
        pizzaPrice: pizzaPrice,
      };
      cartItems.push(pizzaItems);
      counter.textContent = cartItems.length;
      e.target.textContent = "Added to Cart";
      console.log(cartItems);
  // console.log(pizzaItems);
    }

    // Update Cart Preview
    const cartPreviewItem = document.createElement("div");
    cartItems.map((item) => {
      cartPreviewItem.innerHTML = `
      <div class="cart-item">
      <i class="fa-solid fa-xmark"></i>
      <img src="${item.pizzaImage}" alt="" width=100>
      <p>${item.pizzaName}</p>
      <input type="text" placeholder="Price" width=100/>
      <p>${item.pizzaPrice}</p>
      </div>
      `;
      cartPreview.appendChild(cartPreviewItem);
      console.log(item);
    });
  });
});
