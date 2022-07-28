document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;

        //añadir la funcion de mostrar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }

}

function mostrarImagen(e){
    const id = parseInt( e.target.dataset.imagenId);

    //generar la imagen grande
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/grande/${id}.jpg`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //boton para cerrar la imagen
    const cerraImagen = document.createElement('P');
    cerraImagen.textContent = 'X';
    cerraImagen.classList.add('btn-cerrar');

    //cuando se da click, cerrar imagen 
    overlay.onclick = function(){
        overlay.remove();
    }

    //cuando se presiona se cierra la imagen
    cerraImagen.onclick = function(){
        overlay.remove();
    }

    overlay.appendChild(cerraImagen);

    //Mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}