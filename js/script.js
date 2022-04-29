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

//Request for the products
request.open(getRequest, "http://localhost:3000/api/products/" + productID);
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    product = JSON.parse(request.responseText);

    productColors = product.colors;
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
  }
};
request.send();
