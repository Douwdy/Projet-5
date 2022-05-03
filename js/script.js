const request = new XMLHttpRequest();
const getRequest = "GET";
const postRequest = "POST";
const apiUrl = "http://localhost:3000/api/products";
let product;
let productID;
let productName;
let productPrice;
let productColors;
let productImage;
let productAltText;
let productDescription;
let numberOfProducts;

// Get number of products [✅]
request.open(getRequest, apiUrl);
request.send();
request.onload = function () {
  numberOfProducts = JSON.parse(request.response).length;
};

for (let i = 0; i < numberOfProducts; i++) {
  //Get product ID
  request.open(getRequest, apiUrl);
  request.send();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      product = JSON.parse(request.response[i]);
      productID = product._id;
      console.log(productID);
    } else {
      console.log("Erreur lors de la récupération de l'ID du produit");
    }
  };
  //Request for inserting the products on landing page [✅]
  request.open(getRequest, `${apiUrl}/${productID}`);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      product = JSON.parse(request.response);

      productName = product.name;
      productPrice = product.price;
      productImage = product.imageUrl;
      productDescription = product.description;
      productAltText = product.altTxt;

      document.querySelector("#items").innerHTML += `
          <a href="./product.html?id=${productID}">
              <article>
                  <img src="${productImage}" alt="${productAltText}">
                  <h3 class="productName">${productName}</h3>
                  <p class="productDescription">${productDescription}</p>
              </article>
          </a>
          `;
    } else {
      console.log("Erreur lors de la récupération du produit");
    }
  };
}
