/*
*  archivo main.js
*  Creado por: Orlando Arboleda Molina
*
*  Descripción: 
*  Permite manipular los elementos de la pagina web y hacerla dinámica, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

import {armarInformacion} from './funciones.js';
import {calcularcuota} from './funciones.js';
import {desplegarObjetos} from './funciones.js';

const btnCalcular = document.getElementById("calcular");
const btnDesplegar = document.getElementById("desplegar");

btnCalcular.addEventListener('click',ingresarPrestamo)
btnDesplegar.addEventListener('click',desplegarTodos)

let objetos=[];
let info="";
let tARespuesta = document.getElementById("laRespuesta");

function ingresarPrestamo(){
    let nombre = document.getElementById("elNombre").value;   
    let meses = parseInt(document.getElementById("Meses").value);
    let interes = parseFloat(document.getElementById("Interes").value);
    let prestamo = parseInt(document.getElementById("Prestamo").value);
    let cuota = calcularcuota(prestamo, interes, meses);
    let res

    if (nombre.length==0 || isNaN(meses) || isNaN(interes) || isNaN(prestamo)){
        res = 'El nombre, numero de meses, interes o el valor del prestamo, no fueron ingresados o tienen valores de entrada errados'
    }else{
    
        //almaceno la informacion en un objeto
        const informacion = new Object();
        informacion.nombre=nombre;
        informacion.prestamo=prestamo;
        informacion.meses=meses;
        informacion.interes=interes;
        informacion.cuota=cuota;
        
        res = armarInformacion(informacion)
        info += desplegarObjetos(informacion) + "\n";   
    }

    tARespuesta.textContent = res
}

function desplegarTodos()
{
    tARespuesta.textContent = info;
}
