/* const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,

} */

/* console.log(producto); */

/* console.log(producto.nombre);

console.log(producto["precio"]); */

//agregar nuevas propierdades al objeto
/* producto.imagen = "Imagen.jpg";
delete producto.disponible;

console.log(producto); */

//asiganr valor a su variable
/* const nombre = producto.nombre;
console.log(producto); */
/* 
const {nombre } = producto;
console.log(nombre); */

//Crear obejtos dentro de otros
/* const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "20kg",
        medida: "10m"
    }
 }
console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.medida);
console.log(producto.informacion.peso); */

//===========================================
/* const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso: "20kg",
            medida: "10m"
        },
        fabricacion:{
            pais: "china",
        }
  }
}

const { nombre, informacion: {fabricacion}} = producto;

console.log(nombre);

console.log(fabricacion); */
//===========================================================

//congelar objeto e mpedir que se modifique
/* "use strict"// mas estricto javaScript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto);//no permite modificar las propiedades ni crear una nueva
Object.seal(producto);//solo puede modificar los que estan, pero no se puede agregar nuevos */

//===============================================================

/* const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas ={
    peso: "20kg",
    medida: "10m"
}
const resultado = Object.assign(producto, medidas);
const resultado2 = {...producto, ...medidas};

console.log(resultado2);
console.log(resultado); */

//=====================================================
/* const nombre = "Holas";
const precio = 300; */
/* const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfor: function(){
        console.log(`El producto ${this.nombre} tiene un precion de: ${this.precio}`);
    }
}
producto.mostrarInfor(); */

//=================================================================
/* C
//object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto2 = new Producto("Monitos de 24 pulgadas", 600);
console.log(producto2);

const producto3 = new Producto("Televisor", 400);
console.log(producto3); */
//=============================================================

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log( Object.keys(producto));

console.log( Object.values(producto));

console.log( Object.entries(producto));