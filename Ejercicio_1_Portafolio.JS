// Importamos el módulo readline para permitir la entrada por la consola
const readline = require('readline');

// Crear una interfaz para la entrada y salida en la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por un número
rl.question('Por favor, ingresa un número: ', (input) => {
    const numero = Number(input); // Convertimos la entrada a número

    // Verificar si el valor ingresado es un número
    if (isNaN(numero)) {
        console.log('Por favor, ingresa un número válido.');
    } else {
        // Verificar si es par o impar
        if (numero % 2 === 0) {
            console.log(`${numero} es un número par.`);
        } else {
            console.log(`${numero} es un número impar.`);
        }
    }

    // Cerrar la interfaz de lectura
    rl.close();
});
