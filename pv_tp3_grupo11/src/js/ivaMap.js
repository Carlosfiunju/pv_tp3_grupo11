const iva = 1.21;
export const productosIVA = (productos) => {
    const productosConIva = productos.map(producto => {
        return {
        nombre: producto.descripccion,
        precioConIVA: producto.precio * iva
        };
    })
    console.log("Precios con IVA:")
    productosConIva.forEach(({nombre,precioConIVA}) => {
        console.log(`
        nombre: ${nombre},
        precio: ${precioConIVA}
        `);
    })
};