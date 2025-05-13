export const eliminarProducto = (productos) => {
    const precioMin = Math.min(...productos.map(precioM => precioM.precio));
    const indicePrecio = productos.findIndex(precio => precio.precio === precioMin);
    productos.splice(indicePrecio,1); //array.splice(inicio, cantidad, item1, item2, ...) splice es un metodo que modifica el array. donde inicio=desde que indice empieza, cantidad=es la cantidad de elementos a eliminar, item=elementos a agregar

    console.log("Array sin el precio mas bajo")
    productos.forEach(({descripccion,precio}) => {
        console.log(`
        nombre: ${descripccion},
        precio: ${precio}
        `);
    })
}
