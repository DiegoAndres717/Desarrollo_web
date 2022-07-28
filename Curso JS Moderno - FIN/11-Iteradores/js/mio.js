//Fizz Buzz 100 numeros

//Numero multiplos de 3 imprimir Fizz
// si es multiplo de 5 imprimir buzz
// si es de ambos imprimir Fizz buzz

for (let i = 1; i < 100; i++){
    if ( (i % 3 === 0) && (i % 5 === 0)){
        console.log([i], 'Fizz Buzz')
    }
    else if (i % 3 === 0){
        console.log([i],'Fizz')
    } else if (i % 5 === 0){
        console.log([i], 'Buzz')
    }
    
} 
