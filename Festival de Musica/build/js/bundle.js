document.addEventListener('DOMContentLoaded', function(){
    scrolNav();

    navegacionFija();
});

function navegacionFija(){

    const barra = document.querySelector('.header')

    //registrar el intersection observer
    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
    })

    //elemento a observar
    observer.observe(document.querySelector('.sobre-festival'))
}

function scrolNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach( function(enlace) {
        enlace.addEventListener('click', function(e){
            e.preventDefault();
        
        const seccion = document.querySelector(e.target.attributes.href.value);

        seccion.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}
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