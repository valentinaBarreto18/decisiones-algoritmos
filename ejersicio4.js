// Variables globales
let modelo = "";
let material = "";
let mangoLargo = false;
let ganchoPunta = false;
let cantidad = 0;

// Obtener valores de entrada
modelo = prompt("Modelo (Escoba dura, Escoba suave, cepillo): ");
material = prompt("Material (Cerdas sintéticas, Cerdas naturales): ");
let mangoLargoString = prompt("Mango largo (S/N): ").toLowerCase();
mangoLargo = mangoLargoString === "s" || mangoLargoString === "true";
let ganchoPuntaString = prompt("Gancho en punta (S/N): ").toLowerCase();
ganchoPunta = ganchoPuntaString === "s" || ganchoPuntaString === "true";
cantidad = parseInt(prompt("Cantidad (3-30): "));

// Validar entrada
if (
  modelo === "" ||
  material === "" ||
  cantidad < 3 ||
  cantidad > 30 ||
  (mangoLargo && ganchoPunta)
) {
  alert("Entrada inválida");
  cantidad = 0;
  // No hay bucle para interrumpir, por lo que se reinicia la variable 'cantidad' y se continúa con el cálculo
}

// Precios base
let precioBase = 0;
switch (modelo) {
  case "Escoba dura":
    if (material === "Cerdas sintéticas") {
      precioBase = 8000;
    } else if (material === "Cerdas naturales") {
      precioBase = 10000;
    }
    break;
  case "Escoba suave":
    if (material === "Cerdas sintéticas") {
      precioBase = 8000;
    } else if (material === "Cerdas naturales") {
      precioBase = 10000;
    }
    break;
  case "cepillo":
    if (material === "Cerdas sintéticas") {
      precioBase = 12000;
    } else if (material === "Cerdas naturales") {
      precioBase = 15000;
    }
    break;
  default:
    precioBase = 0;
}

// Precios adicionales
let precioAdicional = 0;
if (mangoLargo) {
  precioAdicional += 2000;
}
if (ganchoPunta) {
  precioAdicional += 500;
}

// Cálculo del precio final
const precioFinal = (precioBase + precioAdicional) * cantidad;

// Salida del precio final
alert(`Precio final: ${precioFinal}`);