const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtroCategoria");
const tarjetas = document.querySelectorAll(".producto-card");
const sinResultados = document.getElementById("sin-resultados");

function filtrarProductos() {
    const textoBusqueda = buscador.value.trim().toLowerCase();
    const categoriaElegida = filtroCategoria.value;
    let visibles = 0;

    tarjetas.forEach((tarjeta) => {
        const nombre = tarjeta.dataset.nombre;
        const categoria = tarjeta.dataset.categoria;

        const coincideTexto = nombre.includes(textoBusqueda);
        const coincideCategoria = categoriaElegida === "todos" || categoria === categoriaElegida;

        if (coincideTexto && coincideCategoria) {
            tarjeta.style.display = "";
            visibles++;
        } else {
            tarjeta.style.display = "none";
        }
    });

    sinResultados.hidden = visibles !== 0;
}

buscador.addEventListener("input", filtrarProductos);
filtroCategoria.addEventListener("change", filtrarProductos);