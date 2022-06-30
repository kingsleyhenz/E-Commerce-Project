document.querySelector("#loginform").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const email = formData.get("eml");
  const password = formData.get("psw");

  let user = getSingleUser(email)

  if (user === null){
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      text: "User doesn't exist",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    return;
  }

  if (user.email === email && user.password === password) {
    sessionStorage.setItem("session", "set");

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      text: "Successfully authenticated",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    setTimeout(() => {
      window.history.replaceState(null, null, window.location.pathname);

      window.location.replace("./cart.html");
    }, 900);
  } else {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      text: "Incorrect credentails",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }

});
