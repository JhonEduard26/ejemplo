const cardBody = document.querySelector(".card-body");
const cardParragraph = document.querySelector(".card-parragraph");

cardBody.addEventListener("click", () => {
  cardBody.children[0].children[0].classList.toggle("hidden")
  cardBody.children[0].children[1].classList.toggle("hidden")
  cardParragraph.classList.toggle("hidden")
});
