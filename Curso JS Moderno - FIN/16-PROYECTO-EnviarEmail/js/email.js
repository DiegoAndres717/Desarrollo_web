//==========Variables============
const btnEnviar = document.querySelector('#enviar'); 
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail');

//===VARIABLES PARA CAMPOS=============
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners();
function eventListeners(){
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //reinicia el formulario
    btnReset.addEventListener('click', recetearFormulario);

    //enviar formulario
    formulario.addEventListener( 'submit', enviarEmail);
}




//============FUNCIONES=========
function iniciarApp() {
     //deshabilitar el envio
     btnEnviar.disabled = true;
     btnEnviar.classList.add( 'cursor-not-allowed', 'opacity-50') 
}

 //validar el formulario
 function validarFormulario(e){
    
    
    if(e.target.value.length > 0 ){
        //console.log('si hay algo')

        // elimina lo erroes...
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        };

        e.target.classList.remove( 'border', 'border-red-500' );
        e.target.classList.add( 'border', 'border-green-500' );
    }else{
        e.target.classList.remove( 'border', 'border-green-500' );
        e.target.classList.add( 'border', 'border-red-500' );

        mostrarError( 'Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
        if( er.test( e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove( 'border', 'border-red-500' );
            e.target.classList.add( 'border', 'border-green-500' );
        }else{
            e.target.classList.remove( 'border', 'border-green-500' );
            e.target.classList.add( 'border', 'border-red-500' );

            mostrarError('Email no válido');
        }
    }
    if(er.test( email.value) && asunto.value !== "" && mensaje.value !== "" ){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove( 'cursor-not-allowed', 'opacity-50')
    }
 }

 function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add( 'border', 'border-red-50', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error')
    if(errores.length===0){
    formulario.appendChild(mensajeError);
    //ormulario.insertBefore(mensajeError, document.querySelector( 'mb-10')) //es otra manera para ponerlo encima
    }
 }

 //envia el email

 function enviarEmail(e){
    e.preventDefault();

    //mostrar el spinner
    const spinner = document.querySelector( '#spinner');
    spinner.style.display = 'flex';

    //despues de 3 segundo el spinner desaparece y mostrar emensaje
    setTimeout( () => {
        spinner.style.display = 'none';

        // mensaje que dice que se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Email enviado correctamente'
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')

        //inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout( () =>{
            parrafo.remove();//eliminar el mensaje de exito

            recetearFormulario();
        }, 5000)
    }, 3000);
 }

 //funcion que resetea el formulario

 function recetearFormulario(){
    formulario.reset();

    iniciarApp();
 }