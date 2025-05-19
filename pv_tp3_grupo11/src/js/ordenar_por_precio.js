export const OrdenarPorPrecio = (productos)=>{
    productos.sort((a,b) => a.precio - b.precio)
    console.log("////////////Array ordenado por precio/////////////////");
        productos.forEach(({descripccion,precio}) => {
    console.log(`
    nombre: ${descripccion},
    precio: ${precio}
    `);
 })
}