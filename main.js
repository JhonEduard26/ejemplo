const cardBody1 = document.querySelector(".card-body-1");
const cardBody2 = document.querySelector(".card-body-2");
const cardBody3 = document.querySelector(".card-body-3");
const cardBody4 = document.querySelector(".card-body-4");
const cardParragraph1 = document.querySelector(".card-parragraph1");
const cardParragraph2 = document.querySelector(".card-parragraph2");
const cardParragraph3 = document.querySelector(".card-parragraph3");
const cardParragraph4 = document.querySelector(".card-parragraph4");

cardBody1.addEventListener("click", () =>
  mostrarElemento(cardBody1, cardParragraph1)
);
cardBody2.addEventListener("click", () =>
  mostrarElemento(cardBody2, cardParragraph2)
);
cardBody3.addEventListener("click", () =>
  mostrarElemento(cardBody3, cardParragraph3)
);
cardBody4.addEventListener("click", () =>
  mostrarElemento(cardBody4, cardParragraph4)
);

function mostrarElemento(element, parragraph) {
  element.children[0].children[0].classList.toggle("hidden");
  element.children[0].children[1].classList.toggle("hidden");
  parragraph.classList.toggle("hidden");
}
