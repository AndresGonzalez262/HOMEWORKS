//Challenge 1

/*
Diferencia entre Funciones Flecha y Funciones Regulares en JavaScript
Las funciones flecha y las funciones regulares tienen varias diferencias clave en JavaScript.

Sintaxis

Las funciones regulares se definen con la palabra clave function.
Las funciones flecha usan => y tienen una sintaxis más corta.

Manejo de this

En una función regular, this depende de cómo se llama la función.
En una función flecha, this no cambia y mantiene el valor del contexto donde fue definida.

Objeto arguments

Las funciones regulares tienen acceso al objeto arguments, que contiene todos los parámetros enviados.
Las funciones flecha no tienen arguments, pero pueden usar el operador rest ... en su lugar.

Uso como Constructor

Las funciones regulares pueden usarse con new para crear objetos.
Las funciones flecha no pueden usarse como constructoras.

Retorno implícito

Las funciones regulares requieren la palabra return para devolver un valor.
Las funciones flecha permiten retornar directamente sin escribir return si la función tiene una sola expresión.
*/

// Función Regular
function verificarParImpar(num) {
    if (num % 2 === 0) {
        console.log(`${num} es Par`);
    } else {
        console.log(`${num} es Impar`);
    }
}

// Función Flecha
const verificarParImparFlecha = (num) => {
    console.log(`${num} es ${num % 2 === 0 ? 'Par' : 'Impar'}`);
};

// Llamadas de Ejemplo
verificarParImpar(5);         // Output: 5 es Impar
verificarParImparFlecha(8);   // Output: 8 es Par