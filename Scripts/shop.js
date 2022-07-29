//listeners for all add to cart buttons
window.addEventListener("DOMContentLoaded", () => {
  cartBtns = document.querySelectorAll(".crt__btn");
  cartBtns.forEach((btn) => {
    btn.addEventListener("click", addToCart);
  });
});

function addToCart(event) {
  const price = getPrice(event.target);
  const total = getCurrentTotalPrice() + price;
  const item = getItemCard(event.target);
  addToStorage(item, total);
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    text: "Added To cart",
    showConfirmButton: false,
    timer: 800,
    timerProgressBar: true,
  });
}

//extracts item price from html
function getPrice(target) {
  //find parent of add to cart button
  let div = target.closest(".device__card");
  if (div == null) div = target.closest(".display__card");
  const text = div.querySelector("#price").innerText.replace(/₦|,/g, "");
  return parseInt(text);
}


//returns the total price of all items already in cart
function getCurrentTotalPrice() {
  try {
    const total = localStorage.getItem("subtotal");
    if (total == null) {
      return 0;
    }
    return parseInt(total);
  } catch (error) {
    return 0;
  }
}

function getItemCard(target) {
  //find parent of add to cart button
  let div = target.closest(".device__card");
  if (div == null) div = target.closest(".display__card");
  let clone = div.cloneNode(true);
  clone.removeChild(clone.children[0]);
  return clone.outerHTML;
}

function addToStorage(item, total) {
  try {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    let newCart = JSON.stringify(cart);
    localStorage.setItem("cart", newCart);
    localStorage.setItem("subtotal", total);
  } catch (e) {}
}

function getAllItems() {
  try {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    return cart;
  } catch (e) {}  
}
