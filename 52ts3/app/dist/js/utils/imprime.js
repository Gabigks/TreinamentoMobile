export function imprime(...objetos) {
    objetos.forEach(objeto => {
        console.log(objeto.paraTexto());
    });
}
