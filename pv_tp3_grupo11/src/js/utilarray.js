//mostrar los objetos del arrays productos con foreach
export const mostrarforeach = (productos) => {
    productos.forEach(({descripccion,precio}) => { 
        console.log(`
         nombre: ${descripccion}
         precio: ${precio} `);
    })
}//filtrar  objeto con menor precio 
export const filtrarporprecio = (productos) => {
    const productoporprecio = productos.filter(produ => produ.precio > 20)
   console.log(productoporprecio)
  }