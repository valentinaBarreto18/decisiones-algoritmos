const costbestsellers = 500
    const costliteratura = 100
    const costacademicos = 0
    let total;
    let libros = parseInt(prompt("ingrese cuantos libros desea pedir"));
    if (libros <= 5) {
      let librosolicitado = prompt("ingrese el título del libro, ó de lo libros separados por comas (,)");
      let categoria = parseInt(prompt("ingrese la categoría del libro o libros: \n1. Bestsellers ($500 * día). \n2. literatura (100*día). \n3. académicos (gratuitos)  "));
      if (categoria >= 1 && categoria <= 3) {
        let diasprestamo = parseInt(prompt("ingrese por cuantos días necesitará el libro recuerde que el préstamo puede ser de 1 a 30 días"));
        if (diasprestamo >= 1 && diasprestamo <= 30) {
          switch (categoria) {
            case 1:
              total = ((costbestsellers * diasprestamo) * libros);
              if (diasprestamo >= 10) {
                total = (total - (total * 0.1))
              }
              alert(" su total a pagar es: " + total);
              break;
            case 2:
              total = ((costliteratura * diasprestamo) * libros);
              if (diasprestamo >= 10) {
                total = (total - (total * 0.1))
              }
              alert(" su total a pagar es: " + total);
              break;
            case 3:
              alert(" usted no tiene que pagar nada ya que los libros academicos son gratis");
              break;
            default: alert("revise las opciones ingresadas")
          }
        } else {
          alert("ingrese un día valido")
        }
      } else {
        alert("la categoría es incorrecta rectifique por favor")
      }
    } else {
      alert("ingrese una cantidad de libros valida")
    }