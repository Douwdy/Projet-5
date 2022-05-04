//----------------------------------------------------------------------
// Displaying function [✅]
//----------------------------------------------------------------------
function productDisplay(index) {
  // Selecting the display container
  let productDisplayZone = document.querySelector("#items");
  // for loop to display all products
  for (let product of index) {
    productDisplayZone.innerHTML += `<a href="./product.html?_id=${product._id}">
    <article>
      <img src="${product.imageUrl}" alt="${product.altTxt}">
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>
    </a>`;
  }
}

//------------------------------------------------------------------------
// API Ressources processing [✅]
//------------------------------------------------------------------------

fetch("http://localhost:3000/api/products")
  // fetching api ressources
  .then((res) => res.json())
  // Displaying products
  .then((products) => {
    productDisplay(products);
  })
  // catch error and display "erreur 404, sur la ressource demandée a l'API" if an error occurs
  .catch((err) => {
    document.querySelector(".titles").innerHTML = "<h1>erreur 404</h1>";
    console.log("erreur 404, sur la ressource demandée a l'API:" + err);
  });
