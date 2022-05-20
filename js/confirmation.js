/* Getting the value of the parameter "commande" from the URL and putting it in the HTML element with
the id "orderId". */
const id = new URL(window.location.href).searchParams.get("commande");
console.log(id);

const orderId = document.getElementById("orderId");
orderId.innerHTML = id;

localStorage.clear();