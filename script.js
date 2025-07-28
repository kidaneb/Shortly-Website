const menuButton = document.querySelector("#menu-btn");
const formLink = document.querySelector("#form-link");
const errorMessage = document.querySelector("#error-message");
const hamburgerMenu = document.querySelector("#hamburger-menu");

formLink.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formLink);
  const formInputValue = formData.get("inputLink");
  console.log(formInputValue);

  if (formInputValue == "") {
    errorMessage.innerHTML = "Please Enter Somthing";
    formLink.classList.add("error");
    return;
  }

  formLink.classList.remove("error");
  try {
    const paresedUrl = new URL(formInputValue);
    formLink.classList.remove("error");
    alert("success");
  } catch (error) {
    errorMessage.innerHTML = "please Enter a Valid Link";
    formLink.classList.add("error");
  }
});

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  hamburgerMenu.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("flex");
});
