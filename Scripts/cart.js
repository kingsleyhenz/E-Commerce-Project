var user = JSON.parse(localStorage.getItem("users"));
var navTitle = document.querySelector(".title");
navTitle.innerText = `Welcome ${user[0].fullname}`;

const logbtn = document.querySelector("#logout").addEventListener("click",() =>{
  sessionStorage.removeItem('session');
  window.location.replace("sign.html");
})

let boxbtn = document.querySelector("#bxbtn").addEventListener("click",() =>{
  // console.log("here");
  let htmlholder = document.querySelector(".sell__list")
  htmlholder.innerHTML += `<div class="sell__cards">
  <input type="text" placeholder="Product Name" id="name">
  <input type="file" id="image">
  <input type="text" placeholder="Enter Amount(&#8358;)" id="name">
</div>`;
  
})