const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const Listacursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventsListeners();
function cargarEventsListeners() {
    Listacursos.addEventListener('click', agregarCurso)

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar carrito
    vaciarCarrito.addEventListener( 'click', () =>{
        articulosCarrito = []; //va a ser un arreglo vacio: reseteamos el arreglo

        limpiarHTML();// eliminamos todo el HTML 
    })
}


//funciones
//==================================
function agregarCurso(e){
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatoscurso(cursoSeleccionado);

    }
}
//eliminar elementos del carrito
function eliminarCurso(e){
    console.log(e.target.classList);
    if(e.target.classList.contains){
        const cursoId = e.target.getAttribute('data-id');

        //eliminar del arreglo articuloscarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

        carritoHTML();//volvemos a iterar sobre el carrito y mostrar su HTML
    }
}

//Lee el contenido del html al que le dimos click y extrae la informacioin del curso
function leerDatoscurso(curso){
    /* console.log(curso);  */

    //crear un objeto con el contenido del curso actual
    const infCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //revisa si el elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infCurso.id);
    //console.log(existe);
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map( curso =>{
            if(curso.id === infCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado sumandole 1
            }else{
                return curso; //retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    }else{ //si no existe agregamos el curso al carrito
    //agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infCurso];       
    }


    console.log(articulosCarrito);

    carritoHTML();
}

//muestra el carrito de compras en el thml
function carritoHTML(){

    //limpiar el thml
    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id} = curso;
       // console.log(curso)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100" ></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a> 
            </td>
        `;

        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//eliminar los cursos del tbody
function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML = ' ';


    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}