/*
*  archivo funciones.js
*  Creado por: Orlando Arboleda Molina
*
*  Descripción: 
*  Modulo con archivos auxiliares para el curso de EDyA1 en la Universidad 
*  Autónoma de Occidente
*/

function armarInformacion(nombre, meses, interes, prestamo, cuota){
    return `${nombre} debe pagar ${cuota} cada mes por el prestamo de ${prestamo} a ${meses} meses con el interes de ${interes}%`;
}

export {armarInformacion};