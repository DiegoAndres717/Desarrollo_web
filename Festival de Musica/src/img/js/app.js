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