// Variabless======================
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// eventos==========================
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    //llenar las opciones de años
    llenarSelect();
})
//evenlistener para los formularios de busqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})
year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
})
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})
maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
})
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
})
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    
    filtrarAuto();
})

//Funciones=====================
function mostrarAutos(autos) {

    limpiarHTML();//elimina el HTMl previo

    autos.forEach( auto => {
        const autoHTML = document.createElement('p');

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //insertar en el HTMl
        resultado.appendChild(autoHTML);
    });
}

//Limpiar HTMl
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//genera los años del select
function llenarSelect() {
    for( let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opcio0nes de años
        
    }

}

//funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter( filtarMarca).filter( filtarYear).filter( filtrarMinimo).filter( filtarMaximo).filter( filtarPuertas).filter
    ( filtrarTransmision).filter( filtarColor)

    //console.log(resultado)
    //para mostrar un mensaje cuando no se encuentre un auto 
    if( resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}
function noResultado(){

    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No Hay Resultados';
    resultado.appendChild(noResultado); 
}

function filtarMarca(auto){ 
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca === marca;
    }
    return auto;
}
function filtarYear(auto){
    const { year } = datosBusqueda;
    if( year ){
        return auto.year === year;
    }
    return auto;
}
function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if( minimo ){
        return auto.precio <= minimo;
    }
    return auto;
}
function filtarMaximo(auto){
    const { maximo } = datosBusqueda;
    if( maximo ){
        return auto.precio >= maximo;
    }
    return auto;
}
function filtarPuertas(auto){
    const { puertas } = datosBusqueda;
    if( puertas ){
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if( transmision ){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtarColor(auto){
    const { color } = datosBusqueda;
    if( color ){
        return auto.color === color;
    }
    return auto;
}
