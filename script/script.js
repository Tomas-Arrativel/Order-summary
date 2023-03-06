const cancelBtn = document.querySelector(".article__info-cancel");
const order = document.querySelector(".article");
const cancelPage = document.querySelector(".article2");
const cancelPageBtn = document.querySelector(".article2__btn");

const buyBtn = document.querySelector(".article__info-btn");
const boughtPage = document.querySelector(".article3");
const buyAgainBtn = document.querySelector(".article3__btn");

//  Cancel button functionality
cancelBtn.addEventListener("click", () => {
  order.classList.add("hidden");
  cancelPage.classList.remove("hidden");
});

cancelPageBtn.addEventListener("click", () => {
  cancelPage.classList.add("hidden");
  order.classList.remove("hidden");
});

//  Buy button functionality
buyBtn.addEventListener("click", () => {
  order.classList.add("hidden");
  boughtPage.classList.remove("hidden");
});

buyAgainBtn.addEventListener("click", () => {
  boughtPage.classList.add("hidden");
  order.classList.remove("hidden");
});
