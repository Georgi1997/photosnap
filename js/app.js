//mobile navbar
const navBtn = document.querySelector(".burger");
const navbar = document.querySelector(".nav__navbar");
const overlay = document.querySelector(".overlay");

navBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
  navBtn.classList.toggle("triggerAnim");

  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
});

///PRICING TOGGLE PLAN FUNCTION

const toggleBtn = document.querySelector(".slider");
const price = document.querySelectorAll(".pricing__card .heading-main");

const span = document.querySelectorAll(".span");

toggleBtn.addEventListener("click", () => {
  price.forEach((el) => {
    el.classList.toggle("hidden");
  });
  span.forEach((spanEl) => {
    spanEl.classList.toggle("hidden");
    console.log(spanEl);
  });
});
