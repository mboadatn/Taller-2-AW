

// EJERCICIO 1:

/* function evaluarEstudiante(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    let promedio = suma / notas.length;

    if (promedio >= 7) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
const notasEstudiante = [5, 4, 8, 10, 3];
console.log("Resultado del estudiante: " + evaluarEstudiante(notasEstudiante)); */

// Ejercicio 2:

/* function contarParesImpares(numeros) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares: pares, impares: impares };
}

const listaNumeros = [2, 8, 12, 7, 19, 22, 5];
const resultadoConteo = contarParesImpares(listaNumeros);
console.log("Pares: " + resultadoConteo.pares + " | Impares: " + resultadoConteo.impares); */

// Ejercicio 3:

function clasificarTemperaturas(temperaturas) {
    let diasMuyCalurosos = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        let temp = temperaturas[i];
        let categoria;

        switch (true) {
            case temp < 10:
                categoria = "Frio";
                break;
            case temp >= 10 && temp <= 20:
                categoria = "Templado";
                break;
            case temp > 20 && temp <= 30:
                categoria = "Calido";
                break;
            default:
                categoria = "Muy caluroso";
        }

        console.log("Día " + (i + 1) + ": " + temp + "°C - " + categoria);

        if (categoria === "Muy caluroso") {
            diasMuyCalurosos++;
        }
    }

    return diasMuyCalurosos;
}

const temperaturasSemana = [5, 15, 25, 33, 18, 9, 31];
const diasCalurosos = clasificarTemperaturas(temperaturasSemana);
console.log("Días muy calurosos en la semana: " + diasCalurosos);