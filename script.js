

// EJERCICIO 1:

function evaluarEstudiante(notas) {
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
const notasEstudiante = [8, 6, 7, 9, 5];
console.log("Resultado del estudiante: " + evaluarEstudiante(notasEstudiante));