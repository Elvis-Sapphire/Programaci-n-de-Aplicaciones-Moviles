// Tarifas por hora
const tarifas = {
    diurno: 12000,
    nocturno: 16000,
    incrementoDiurno: 2000,
    incrementoNocturno: 3000,
};

// Objeto literal para cada empleado
const empleados = {
    empleado1: {
        nombre: "Empleado 1",
        turnos: {
            Lunes: "nocturno",
            Martes: "nocturno",
            Miércoles: "nocturno",
            Jueves: "diurno",
            Viernes: "diurno",
            Sábado: "diurno", // Se asume que no trabaja el sábado
            Domingo: "diurno", // Se asume que no trabaja el domingo
        },
        calcularPago: function () {
            let pagoSemanal = 0;
            const pagoDiario = {};

            for (const dia in this.turnos) {
                let tarifaHora = this.turnos[dia] === "diurno" ? tarifas.diurno : tarifas.nocturno;
                let pagoDiarioTotal = tarifaHora * 10; // 10 horas de trabajo

                // Incremento por domingo
                if (dia === "Domingo") {
                    if (this.turnos[dia] === "diurno") {
                        pagoDiarioTotal += tarifas.incrementoDiurno * 10; // 10 horas
                    } else {
                        pagoDiarioTotal += tarifas.incrementoNocturno * 10; // 10 horas
                    }
                }

                // Guardar el pago diario
                pagoDiario[dia] = pagoDiarioTotal;
                pagoSemanal += pagoDiarioTotal;
            }

            return { pagoDiario, pagoSemanal };
        },
    },
    empleado2: {
        nombre: "Empleado 2",
        turnos: {
            Lunes: "diurno", // Se asume que no trabaja el lunes
            Martes: "nocturno",
            Miércoles: "nocturno",
            Jueves: "nocturno",
            Viernes: "diurno", // Se asume que no trabaja el viernes
            Sábado: "diurno", // Se asume que no trabaja el sábado
            Domingo: "diurno",
        },
        calcularPago: function () {
            let pagoSemanal = 0;
            const pagoDiario = {};

            for (const dia in this.turnos) {
                let tarifaHora = this.turnos[dia] === "diurno" ? tarifas.diurno : tarifas.nocturno;
                let pagoDiarioTotal = tarifaHora * 10; // 10 horas de trabajo

                // Incremento por domingo
                if (dia === "Domingo") {
                    if (this.turnos[dia] === "diurno") {
                        pagoDiarioTotal += tarifas.incrementoDiurno * 10; // 10 horas
                    } else {
                        pagoDiarioTotal += tarifas.incrementoNocturno * 10; // 10 horas
                    }
                }

                // Guardar el pago diario
                pagoDiario[dia] = pagoDiarioTotal;
                pagoSemanal += pagoDiarioTotal;
            }

            return { pagoDiario, pagoSemanal };
        },
    },
    empleado3: {
        nombre: "Empleado 3",
        turnos: {
            Lunes: "diurno", // Se asume que no trabaja el lunes
            Martes: "diurno", // Se asume que no trabaja el martes
            Miércoles: "diurno",
            Jueves: "diurno",
            Viernes: "nocturno",
            Sábado: "nocturno",
            Domingo: "nocturno",
        },
        calcularPago: function () {
            let pagoSemanal = 0;
            const pagoDiario = {};

            for (const dia in this.turnos) {
                let tarifaHora = this.turnos[dia] === "diurno" ? tarifas.diurno : tarifas.nocturno;
                let pagoDiarioTotal = tarifaHora * 10; // 10 horas de trabajo

                // Incremento por domingo
                if (dia === "Domingo") {
                    if (this.turnos[dia] === "diurno") {
                        pagoDiarioTotal += tarifas.incrementoDiurno * 10; // 10 horas
                    } else {
                        pagoDiarioTotal += tarifas.incrementoNocturno * 10; // 10 horas
                    }
                }

                // Guardar el pago diario
                pagoDiario[dia] = pagoDiarioTotal;
                pagoSemanal += pagoDiarioTotal;
            }

            return { pagoDiario, pagoSemanal };
        },
    },
};

// Calcular y mostrar el pago de cada empleado
for (const empleado in empleados) {
    const { nombre, calcularPago } = empleados[empleado];
    const { pagoDiario, pagoSemanal } = calcularPago.call(empleados[empleado]);
    
    console.log(`Pagos de ${nombre}:`);
    console.log('Pago diario por día:', pagoDiario);
    console.log(`Pago semanal total: ${pagoSemanal} CLP\n`);
}
