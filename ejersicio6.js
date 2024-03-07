let restaurantHamburguesas = 1;
let restaurantPizzeria = 2;
let restaurantComidaChina = 3;
let hamburguesaSimple = 25000;

const pizzaFamilia = 85000;
const fideosConPollo = 18000;
let selectedRestaurant = parseInt(
prompt("Selecciona un restaurante:\n1. Hamburguesas\n2. Pizzería\n3. Comida China"));
let totalPrice = 0;
let subtotalPrice = 0;

switch (selectedRestaurant) {
  case restaurantHamburguesas:
    let hamburguesasQuantity = parseInt(
      prompt("Cuantas hamburguesas simples deseas? (25000 cada una)")
    );
    subtotalPrice = hamburguesasQuantity * hamburguesaSimple;
    break;
  case restaurantPizzeria:
    let pizzaQuantity = parseInt(
      prompt("Cuantas pizzas familia deseas? (85000 cada una)")
    );
    subtotalPrice = pizzaQuantity * pizzaFamilia;
    break;
  case restaurantComidaChina:
    let fideosQuantity = parseInt(
      prompt("Cuantos fideos con pollo deseas? (18000 cada uno)")
    );
    subtotalPrice = fideosQuantity * fideosConPollo;
    break;
  default:
    alert("El restaurante seleccionado no es válido.");
    break;
}

if (subtotalPrice < 23000) {
  alert(
    "El pedido mínimo es de $23000, por favor selecciona más artículos."
  );
} else {
  totalPrice = subtotalPrice + 5000;
  alert(
    "Resumen del pedido:\nSubtotal: $" +
    subtotalPrice +
    "\nCosto de envío: $5000\nTotal: $" +
    totalPrice
  );
}