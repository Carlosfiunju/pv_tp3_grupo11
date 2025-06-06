import { mostrarforeach } from "./utilarray.js";
import { filtrarporprecio } from "./utilarray.js";
import { productosIVA } from "./ivaMap.js";
import { eliminarProducto } from "./eliminarObjeto.js";
import { agregarFinal}  from "./agregar_final.js";
import { OrdenarPorPrecio } from "./Ordenar_por_precio.js";
const  productos=[
    {
        descripccion:"teclado" ,
         precio:30000
 },
 {
    descripccion:"monitor",
    precio:100000
 },
 {
    descripccion:"mouse",
    precio:25000
 },
 {
    descripccion:"mousepad",
    precio:15 
 },
 {
  descripccion:"auriculares",
  precio:70000
 }
];

//mostrar productos 
mostrarforeach(productos);
productosIVA(productos);
eliminarProducto(productos);
//filtrar con precio mayor a 20
 filtrarporprecio(productos);
mostrarforeach(productos);
//agregar un producto al final del array
agregarFinal(productos);
//Ordenar por precio
OrdenarPorPrecio(productos);