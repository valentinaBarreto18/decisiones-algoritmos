let valorMatricula = 7000000
let valorDescuento = 0.05
let descuento = valorMatricula-(valorMatricula*valorDescuento)
let valordoscuotas = (7000000/2)
let intereses = (valorMatricula*0.02)-valorMatricula
let cuotaFinal = valordoscuotas+intereses
let valortrescuotas = (7000000/3)
let costotrescuotas = valortrescuotas+intereses

let pantalla = parseInt(prompt(`seleccione una opcion de pago \n1. pago completo \n2. pago a dos cuotas \n3. pago a tres cuotas`)) 
switch(pantalla){
    case 1:
    console.log(`tu matricula quedo en ${descuento}`);
    break;

    case 2:
     console.log(`tu matricula quedo en ${cuotaFinal}`);
     break;

     case 3:
    console.log(`tu matricula quedo en ${costotrescuotas}`);
    break;
 default:
    console.log(`opcion invalida, ingrese un valor de cuota valido`);
    break;
}