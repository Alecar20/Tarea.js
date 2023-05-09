//ejercicio 1
function Piramide(num) {
  for (let i=1; i<=num; i++) {
    let numeros = "";
    for (let j=1; j<=i; j++) {
      numeros+= j;
    }
    console.log(numeros);
  }
}


Piramide(6);
Piramide(3);

//ejercicio 2

let Array1 = ['rojo', 'azul', 'amarillo'];
let Array2 = ['blanco', 'negro', 'rojo'];


function devolver(Array1, Array2) {
let iguales = [];
for(let i = 0; i < Array1.length; i++) {
  for(let j = 0; j < Array2.length; j++) {
    if(Array1[i] === Array2[j]) {
      iguales.push(Array1[i]);
    }
  }
}
return iguales;
}


console.log(devolver(Array1, Array2)); 

//ejercicio 3

class Carrito {
constructor() {
  this.productos = [];
  this.montoTotal = 0;
}

agregarProducto(nombre, precio, unidades) {
  let productoExistente = this.productos.find(p => p.nombre === nombre);
  if (productoExistente) {
    console.log(`Ya existe ${productoExistente.nombre} con ${productoExistente.unidades} unidades`);
    return;
  }

  let nuevoProducto = {
    nombre: nombre,
    precio: precio,
    unidades: unidades
  };

  this.productos.push(nuevoProducto);
  this.montoTotal += precio * unidades;
}
}



let carrito = new Carrito();
console.log(carrito); 
carrito.agregarProducto("Leche", 5, 3); 
carrito.agregarProducto("Azucar", 10, 5);
console.log(carrito); 

carrito.agregarProducto("Leche", 5, 3); 
console.log(carrito); 
