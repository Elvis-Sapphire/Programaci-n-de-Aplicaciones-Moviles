let suma = 0;

// Comenzamos con el primer número
let numero = 500;

// Usamos un ciclo while para sumar hasta llegar a 800
while (numero <= 800) {
    suma += numero; // Agregar el número actual a la suma

    // Alternar entre agregar y restar de manera ajustada
    if (numero === 500) {
        numero += 456; // Primer paso en la serie
    } else if (numero === 456) {
        numero += 54; // Siguiente paso
    } else if (numero === 510) {
        numero += 454; // Siguiente paso
    } else if (numero === 454) {
        numero += 66; // Siguiente paso
    } else if (numero === 520) {
        numero += 452; // Siguiente paso
    } else {
        // Como ya hemos sumado hasta 800, solo sumar el siguiente número en orden hasta llegar a 800
        numero++;
    }
}

console.log(`El resultado de la sumatoria S es: ${suma}`);
