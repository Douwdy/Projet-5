/* Obtenir la valeur du paramètre "commande" de l'URL et le met dans l'élément HTML avec
l'identifiant "orderId". */
const id = new URL(window.location.href).searchParams.get("commande");
console.log(id);

const orderId = document.getElementById("orderId");
orderId.innerHTML = id;

localStorage.clear();