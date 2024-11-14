import "../css/style.css";
import { techProducts } from "./Products";

const DOMSelectors = {
  image: document.querySelector("#image"),
  cardHeader: document.querySelector("#title"),
  button: document.querySelector(".sub"),
  description: document.querySelector("#description"),
  container: document.querySelector(".container"),
  reset: document.querySelector("#reset"),
  option: document.querySelector("#sale"),
  option1: document.querySelector("#one"),
  option2: document.querySelector("#two"),
  option3: document.querySelector("#three"),
  option4: document.querySelector("#four"),
  option5: document.querySelector("#five"),
  themee: document.querySelector(".theme"),
};

function cards() {
  document.querySelector(".container").innerHTML = "";
  techProducts.forEach((element) => {
    if (element["salePrice"]) {
      const specific = `<div class="card"> 
          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Price: ${element["price"]}</p> 
          <p class="Description">Sale Price: ${element["salePrice"]}</p> 
          <p class="Description">Brand: ${element["brand"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element["img"]}" alt="${element["name"]}" class="Image"></img>
      </div>`;

      DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
    } else {
      const specific = `<div class="card"> 
          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Price: ${element["price"]}</p> 
          <p class="Description">Brand: ${element["brand"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element["img"]}" alt="${element["name"]}" class="Image"></img>
      </div>`;

      DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
    }
  });
}
DOMSelectors.reset.addEventListener("click", function (event) {
  event.preventDefault();
  cards();
});

cards();

function saleprice(x) {
  document.querySelector(".container").innerHTML = "";
  const filtered = techProducts.filter((element) => element[x]);
  filtered.forEach((element) => {
    const specific = `<div class="card"> 
          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Price: ${element["price"]}</p> 
          <p class="Description">Sale Price: ${element["salePrice"]}</p> 
          <p class="Description">Brand: ${element["brand"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element["img"]}" alt="${element["name"]}" class="Image"></img>
      </div>`;

    DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
  });
}

//filter items only on sale
DOMSelectors.option.addEventListener("click", function (event) {
  event.preventDefault();
  saleprice("salePrice");
});

function sortbrand(x) {
  document.querySelector(".container").innerHTML = "";
  const filtered = techProducts.filter((element) => element.brand == x);
  filtered.forEach((element) => {
    if (element["salePrice"]) {
      const specific = `<div class="card"> 
          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Price: ${element["price"]}</p> 
          <p class="Description">Sale Price: ${element["salePrice"]}</p> 
          <p class="Description">Brand: ${element["brand"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element["img"]}" alt="${element["name"]}" class="Image"></img>
      </div>`;

      DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
    } else {
      const specific = `<div class="card"> 
          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Price: ${element["price"]}</p> 
          <p class="Description">Brand: ${element["brand"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element["img"]}" alt="${element["name"]}" class="Image"></img>
      </div>`;

      DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
    }
  });
}
DOMSelectors.option1.addEventListener("click", function (event) {
  event.preventDefault();
  sortbrand("Brand A");
});
DOMSelectors.option2.addEventListener("click", function (event) {
  event.preventDefault();
  sortbrand("Brand B");
});
DOMSelectors.option3.addEventListener("click", function (event) {
  event.preventDefault();
  sortbrand("Brand C");
});
DOMSelectors.option4.addEventListener("click", function (event) {
  event.preventDefault();
  sortbrand("Brand D");
});
DOMSelectors.option5.addEventListener("click", function (event) {
  event.preventDefault();
  sortbrand("Brand E");
});

//theme change
DOMSelectors.themee.addEventListener("click", function (event) {
  event.preventDefault();
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});

// DOMSelectors.form.addEventListener()
// for checkbox form for sorting cards
