/*
*  archivo main.js
*  Creado por: Orlando Arboleda Molina
*
*  Descripción: 
*  Permite manipular los elementos de la pagina web y hacerla dinámica, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

import {armarInformacion} from './funciones.js';

const btnCalcular = document.getElementById("calcular");
const btnRecordar = document.getElementById("recordar");

btnCalcular.addEventListener('click',ingresarPrestamo)
btnRecordar.addEventListener('click',desplegarTodos)

let info = ''

let tARespuesta = document.getElementById("laRespuesta");

function ingresarPrestamo(){
    let nombre = document.getElementById("elNombre").value;   
    let meses = parseInt(document.getElementById("Meses").value);
    let interes = parseFloat(document.getElementById("Interes").value);
    let prestamo = parseInt(document.getElementById("Prestamo").value);
    let res
    //aqui calculo la cuota
    let cuota = parseInt(prestamo * ((((1+interes)**meses)*interes)/(((1+interes)**meses)-1)));

    if (nombre.length==0 || isNaN(meses) || isNaN(interes) || isNaN(prestamo)){
        res = 'El nombre, numero de meses o el interes, no fueron ingresados o tienen valores de entrada errados'
    }else{
        res = armarInformacion(nombre, meses, interes, prestamo, cuota)
        info +=  res +'\n';    
    }

    tARespuesta.textContent = res
}

function desplegarTodos()
{
    tARespuesta.textContent = info;
}
