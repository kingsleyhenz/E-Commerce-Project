function addToCart(event) {
  event.preventDefault();
  const price = getPrice(event.target)
  const total = getCurrentTotalPrice()
  
}


window.addEventListener("DOMContentLoaded", (event) => {
    cartBtns = document.querySelectorAll(".crt__btn");
    cartBtns.forEach((btn) => {
      btn.addEventListener("click", addToCart);
    });
});

function getCurrentTotalPrice(){
    try {
      const total =  sessionStorage.getItem("subtotal")
      if(total==null){
        return 0
      }
      return parseInt(total)
    } catch (error) {
        return 0
    }
}
function getPrice(target){
const div = target.closest(".device__card")
let priceStr = div.children[2].children[1].children[1].innerText.toString()
priceStr=priceStr.replace("&#8358","")
console.log(priceStr);
}


document.querySelector('#upload').addEventListener("click",() =>{
  Swal.fire({
    toast: true,
    position: "top",
    icon: "success",
    text: "Items Have Been Uploaded",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
})  


