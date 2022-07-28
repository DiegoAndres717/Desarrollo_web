/* const deTodo = ['Hola', 20, true, null, {nombre:'Diego', estudio: 'programación' }]

console.log(deTodo); */

/* const numeros = [20, 30, 40, 49, 10];

console.log(numeros);

console.table(numeros);

//acceder al arreglo
console.log(numeros[2]); */
//====================================================

/* const mese = ['Enero', 'febrero', 'Marzo', 'Abril'];

console.log(mese.length);

for( let i = 0; i < mese.length; i++){
    console.log(mese[i]);
} */
//===============================================
/* 
const mese = ['Enero', 'febrero', 'Marzo', 'Abril'];

mese.push('Mayo');

console.log(mese) */
//================================================

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 300 },
    {nombre: 'Televisor', precio: 600 },
    {nombre: 'Tablets', precio: 900 },
    {nombre: 'Audifonos', precio: 200 },
    {nombre: 'Teclado', precio: 400 },
    {nombre: 'Celular', precio: 1000 },

]
/* for( let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
}  */

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})