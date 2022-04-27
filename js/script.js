const request = new XMLHttpRequest();
const getRequest = "GET"
const apiUrl = "http://localhost:3000/api/products"
let product
let productName;
let productPrice;
let productColors;
let productImage;
let productAltText;
let productDescription;

//Request products Kanap Sinopé
request.open(getRequest, ("http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926"));
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        product = JSON.parse(request.responseText);

        productColors = product.colors;
        productName = product.name;
        productPrice = product.price;
        productImage = product.imageUrl;
        productDescription = product.description;
        productAltText = product.altTxt;

        document.querySelector('#items').innerHTML += `
        <article>
            <img src="${productImage}" alt="${productAltText}">
            <h3 class="productName">${productName}</h3>
            <p class="productDescription">${productDescription}</p>
        </article>
      `
    }
};
request.send();

//Request products Kanap Cyllène
request.open(getRequest, ("http://localhost:3000/api/products/415b7cacb65d43b2b5c1ff70f3393ad1"));
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        product = JSON.parse(request.responseText);
        productColors = product.colors;
        productName = product.name;
        productPrice = product.price;
        productImage = product.imageUrl;
        productDescription = product.description;
        productAltText = product.altTxt;
        document.querySelector('#items').innerHTML += `
        <article>
            <img src="${productImage}" alt="${productAltText}">
            <h3 class="productName">${productName}</h3>
            <p class="productDescription">${productDescription}</p>
        </article>
      `
    }
};
request.send();

//Request products Kanap Calycé
request.open(getRequest, ("http://localhost:3000/api/products/055743915a544fde83cfdfc904935ee7"));
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        product = JSON.parse(request.responseText);
        productColors = product.colors;
        productName = product.name;
        productPrice = product.price;
        productImage = product.imageUrl;
        productDescription = product.description;
        productAltText = product.altTxt;
        document.querySelector('#items').innerHTML += `
        <article>
            <img src="${productImage}" alt="${productAltText}">
            <h3 class="productName">${productName}</h3>
            <p class="productDescription">${productDescription}</p>
        </article>
      `
    }
};
request.send();

//Request products Kanap Autonoé
request.open(getRequest, ("http://localhost:3000/api/products/a557292fe5814ea2b15c6ef4bd73ed83"));
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        product = JSON.parse(request.responseText);
        productColors = product.colors;
        productName = product.name;
        productPrice = product.price;
        productImage = product.imageUrl;
        productDescription = product.description;
        productAltText = product.altTxt;
        document.querySelector('#items').innerHTML += `
        <article>
            <img src="${productImage}" alt="${productAltText}">
            <h3 class="productName">${productName}</h3>
            <p class="productDescription">${productDescription}</p>
        </article>
      `
    }
};
request.send();

//Request products Kanap Eurydomé
request.open(getRequest, ("http://localhost:3000/api/products/8906dfda133f4c20a9d0e34f18adcf06"));
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        product = JSON.parse(request.responseText);
        productColors = product.colors;
        productName = product.name;
        productPrice = product.price;
        productImage = product.imageUrl;
        productDescription = product.description;
        productAltText = product.altTxt;
        document.querySelector('#items').innerHTML += `
        <article>
            <img src="${productImage}" alt="${productAltText}">
            <h3 class="productName">${productName}</h3>
            <p class="productDescription">${productDescription}</p>
        </article>
      `
    }
};
request.send();

//Request products Kanap Hélicé
request.open(getRequest, ("http://localhost:3000/api/products/77711f0e466b4ddf953f677d30b0efc9"));
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        product = JSON.parse(request.responseText);
        productColors = product.colors;
        productName = product.name;
        productPrice = product.price;
        productImage = product.imageUrl;
        productDescription = product.description;
        productAltText = product.altTxt;
        document.querySelector('#items').innerHTML += `
        <article>
            <img src="${productImage}" alt="${productAltText}">
            <h3 class="productName">${productName}</h3>
            <p class="productDescription">${productDescription}</p>
        </article>
      `
    }
};
request.send();

//Request products Kanap Thyoné
request.open(getRequest, ("http://localhost:3000/api/products/034707184e8e4eefb46400b5a3774b5f"));
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        product = JSON.parse(request.responseText);
        productColors = product.colors;
        productName = product.name;
        productPrice = product.price;
        productImage = product.imageUrl;
        productDescription = product.description;
        productAltText = product.altTxt;
        document.querySelector('#items').innerHTML += `
        <article>
            <img src="${productImage}" alt="${productAltText}">
            <h3 class="productName">${productName}</h3>
            <p class="productDescription">${productDescription}</p>
        </article>
      `
    }
};
request.send();

//Request products Kanap orthosie
request.open(getRequest, ("http://localhost:3000/api/products/a6ec5b49bd164d7fbe10f37b6363f9fb"));
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        product = JSON.parse(request.responseText);
        productColors = product.colors;
        productName = product.name;
        productPrice = product.price;
        productImage = product.imageUrl;
        productDescription = product.description;
        productAltText = product.altTxt;
        document.querySelector('#items').innerHTML += `
        <article>
            <img src="${productImage}" alt="${productAltText}">
            <h3 class="productName">${productName}</h3>
            <p class="productDescription">${productDescription}</p>
        </article>
      `
    }
};
request.send();