function showAlert() {
  alert("¡Hola, solo quería decir HOLA!");
}

document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });
