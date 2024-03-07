// Definir modelos, tallas y precios base
const modelos = {
    'clasicos': { tallaMinima: 35, tallaMaxima: 44, precioBase: 500000 },
    'running': { tallaMinima: 35, tallaMaxima: 44, precioBase: 800000 },
    'basketball': { tallaMinima: 35, tallaMaxima: 44, precioBase: 1000000 }
  };
  
  // Obtener la entrada del usuario y mostrar el precio final
  let modelo = prompt('Seleccione un modelo de zapato: clásicos, running o basketball');
  let talla = parseInt(prompt('Seleccione una talla entre ' + modelos[modelo].tallaMinima + ' y ' + modelos[modelo].tallaMaxima));
  let cantidad = parseInt(prompt('Seleccione la cantidad a comprar'));
  
  if (modelos[modelo] && talla >= modelos[modelo].tallaMinima && talla <= modelos[modelo].tallaMaxima && cantidad >= 1 && cantidad <= 5) {
    let precioBase = modelos[modelo].precioBase;
    let precioFinal = precioBase * cantidad;
    if (cantidad >= 3) {
      precioFinal *= 0.9; // Aplicar 10% de descuento
    }
  
    switch (modelo) {
      case 'clasicos':
        alert('Ha seleccionado el zapato clásico');
        break;
      case 'running':
        alert('Ha seleccionado el zapato running');
        break;
      case 'basketball':
        alert('Ha seleccionado el zapato basketball');
        break;
      default:
        alert('Lo siento, ese modelo no está disponible');
        break;
    }
  
    alert('El precio final es $' + precioFinal.toFixed(2));
  } else {
    if (!modelos[modelo]) {
      alert('Lo siento, ese modelo no está disponible');
    }
    if (talla < modelos[modelo].tallaMinima || talla > modelos[modelo].tallaMaxima) {
      alert('Lo siento, esa talla no está disponible para ese modelo');
    }
    if (cantidad < 1 || cantidad > 5) {
      alert('Lo siento, debe comprar entre 1 y 5 pares');
    }
  }