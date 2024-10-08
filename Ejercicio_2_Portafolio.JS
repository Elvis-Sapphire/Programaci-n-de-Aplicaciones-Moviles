const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular el promedio ponderado
function calcularPromedio() {
    rl.question('Ingrese la Nota 1 (40%): ', (nota1) => {
        rl.question('Ingrese la Nota 2 (30%): ', (nota2) => {
            rl.question('Ingrese la Nota 3 (30%): ', (nota3) => {
                // Convertir las notas a números
                const n1 = parseFloat(nota1);
                const n2 = parseFloat(nota2);
                const n3 = parseFloat(nota3);

                // Validar que las notas sean números
                if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                    console.log('Por favor, ingrese valores numéricos válidos para las notas.');
                    rl.close();
                    return;
                }

                // Calcular el promedio ponderado
                const promedio = (n1 * 0.4) + (n2 * 0.3) + (n3 * 0.3);

                // Determinar el resultado del alumno
                if (promedio < 3.95) {
                    console.log('El estudiante ha reprobado la asignatura.');
                } else if (promedio >= 3.95 && promedio < 4.95) {
                    console.log('El estudiante va a examen.');
                } else {
                    console.log('El estudiante se exime de la asignatura.');
                }

                // Mostrar el promedio
                console.log(`El promedio ponderado es: ${promedio.toFixed(2)}`);
                rl.close();
            });
        });
    });
}

// Iniciar el programa
calcularPromedio();
