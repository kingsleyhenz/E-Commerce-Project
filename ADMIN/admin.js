// upload
document.querySelector("#addprdform").addEventListener("submit", function (e) {
    e.preventDefault();
    const objForm = new FormData(e.target);
  
    const name = objForm.get("name");
    const imgurl = objForm.get("imgurl");
    const price = objForm.get("price");
    const rating = objForm.get("rating");
    const desc = objForm.get("desc");
  
    if (!name || !imgurl || !price || !rating)
      return alert("Please fill in all the details");
  
    const prdDetails = {
      id: Math.floor(Math.random() * 413400 + 113400),
      name,
      imgurl,
      price,
      rating,
      desc,
    };
  
    if (localStorage.getItem("products") === null) {
      localStorage.setItem("products", "[]");
    }
  
    const data = JSON.parse(localStorage.getItem("products"));
  
    data.push(prdDetails);
  
    localStorage.setItem("products", JSON.stringify(data));
  
    document.querySelector("#prdnnnm").value = ''
    document.querySelector("#prdimgg").value = ''
    document.querySelector("#prdprc").value = ''
    document.querySelector("#prdrtt").value = ''
    document.querySelector("#prdddd").value = ''
  
  });

  
  const data = JSON.parse(localStorage.getItem("products"));

for (let i = 0; i < data.length; i++) {
  document.querySelector("#tbldatarow").innerHTML += `<tr class="tabledata">
    <td>${data[i].id}</td>
    <td class="tdimg"><img src="${data[i].imgurl}" alt=""></td>
    <td>${data[i].name}</td>
    <td>${data[i].price}</td>
    <td><a href="editproduct.html?id=${data[i].id}" class="edtbtn">Edit</a></td>
    <td><a style="cursor: pointer" class="delbtn" onclick="removeRow(${data[i].id})">Delete</a></td>
</tr>`;
}
// edit




// Delete
function removeRow(value){
    const data = JSON.parse(localStorage.getItem("products"));
    
    const newArr = []
    
    for(let i = 0; i < data.length; i++){
        if(data[i].id != value){
            newArr.push(data[i])
        }
    }
    localStorage.setItem("products", JSON.stringify(newArr));

    location.reload()
}

