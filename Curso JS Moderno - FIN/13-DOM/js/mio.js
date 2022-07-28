const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

/* btnFlotante.addEventListener('click', () =>{
    console.log('Diste click en el boton');
}); */

btnFlotante.addEventListener('click', mostraFooter);

function mostraFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
        //btnFlotante.classList.remove('activo')
        this.classList.remove('activo')
        this.texContent = 'Idioma y Moneda'
    }
    else{
      footer.classList.add('activo');
    //   btnFlotante.classList.add('activo')
      this.classList.add('activo');
      this.texContent = 'X CERRAR';
    }
}