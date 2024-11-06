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
          <p class="Description">${element["price"]}</p> 
          <p class="Description">${element["salePrice"]}</p> 
          <p class="Description">${element["brand"]}</p> 
          <p class="Description">${element["features"]}</p> 
          <img src="${element.img}" alt="${element[""]}" class="Image"></img>
      </div>`;

    DOMSelectors.container.insertAdjacentHTML("afterbegin", specific);
  });
}

cards();
