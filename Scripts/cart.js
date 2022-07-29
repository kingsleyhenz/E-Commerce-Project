var user = JSON.parse(localStorage.getItem("users"));
var navTitle = document.querySelector(".title");
navTitle.innerText = `Welcome User `;

const logbtn = document.querySelector("#logout").addEventListener("click",() =>{
  sessionStorage.removeItem('session');
  window.location.replace("sign.html");
})


function getAllItems() {
  try {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    return cart;
  } catch (e) {}
}

window.onload = function () {
  let div = document.querySelector("#list");
  const items = getAllItems();
  items.forEach((item) => {
    div.innerHTML += item;
  });
  let total = document.querySelector("#totprice");
  total.value = "₦" + getCurrentTotalPrice();
};
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


let checkout = document.querySelector('#chkt').addEventListener("click",() =>{
  // console.log("here");
  localStorage.removeItem("cart")
  localStorage.removeItem("subtotal")
  document.querySelector('#list').innerHTML=""
  document.querySelector('#totprice').value=""
})


let boxbtn = document.querySelector("#bxbtn").addEventListener("click",() =>{
  // console.log("here");
  let htmlholder = document.querySelector(".sell__list")
  htmlholder.innerHTML += `<div class="sell__cards">
  <input type="text" placeholder="Product Name" id="name">
  <input type="file" id="image">
  <input type="text" placeholder="Enter Amount(&#8358;)" id="name">
  <input type="text" placeholder="Enter Phone Number" id="name">
  <input type="text" placeholder="Account Details" id="name"> 
  </div>`;
  
})