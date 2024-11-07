import "../css/style.css";
import { techProducts } from "./Products";

const DOMSelectors = {
  image: document.querySelector("#image"),
  cardHeader: document.querySelector("#title"),
  button: document.querySelector(".sub"),
  description: document.querySelector("#description"),
  container: document.querySelector(".container"),
};

function cards() {
  techProducts.forEach((element) => {
    const specific = `<div class="card"> 

          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Price: ${element["price"]}</p> 
          <p class="Description">Sale Price: ${element["salePrice"]}</p> 
          <p class="Description">Brand: ${element["brand"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element[""]}" alt="${element[""]}" class="Image"></img>
      </div>`;

    DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
  });
}

cards();

function showByGenre(x) {
  document.querySelector(".container").innerHTML = "";
  const filtered = techProducts.filter((i) => i[x]);
}

// DOMSelectors.form.addEventListener()
// for checkbox form for sorting cards
