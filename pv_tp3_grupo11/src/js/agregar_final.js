export const agregarFinal = (productos) => {
    productos.push ({descripccion: "Parlante Bluetooth", precio: 59000.90});
    console.log("/////Array con un producto adicional//////")
    productos.forEach(({descripccion,precio}) => {
    console.log(`
    nombre: ${descripccion},
    precio: ${precio}
    `);
 })
}