/*
*  archivo funciones.js
*  Creado por: Orlando Arboleda Molina
*
*  Descripción: 
*  Modulo con archivos auxiliares para el curso de EDyA1 en la Universidad 
*  Autónoma de Occidente
*/

function armarInformacion(informacion){
    let nombre = informacion.nombre;
    let cuota = informacion.cuota;
    let prestamo = informacion.prestamo;
    let meses = informacion.meses;
    let interes = informacion.interes;

    return `${nombre} debe pagar ${cuota} cada mes por el prestamo de ${prestamo} a ${meses} meses con el interes de ${interes}%`;
}

function calcularcuota(prestamo, interes, meses){
    let cuota= parseInt(prestamo*((((1+interes)**meses)*interes)/(((1+interes)**meses)-1)));
    return cuota;
}

function desplegarObjetos(objeto){
    return `Nombre: ${objeto.nombre}, Cuota: ${objeto.cuota}, Prestamo: ${objeto.prestamo}, Meses: ${objeto.meses}, Interes: ${objeto.interes}%`;
}

export {armarInformacion};
export {calcularcuota};
export {desplegarObjetos};