import {armarInformacion} from './funciones.js';
import {calcularcuota} from './funciones.js';
import {desplegarObjetos} from './funciones.js';
import {suma} from './funciones.js';
import {mayor300} from './funciones.js';
import {interes2} from './funciones.js';
import {incremento} from './funciones.js';
import {decremento} from './funciones.js';
import {primer5m} from './funciones.js';
import {soloCuotas} from './funciones.js';
import {obtenerOpcion} from './funciones.js';
import {doceMeses} from './funciones.js';

const btnCalcular = document.getElementById("calcular");
const btnAccion = document.getElementById("accion");

btnCalcular.addEventListener('click',ingresarPrestamo)
btnAccion.addEventListener('click',accion)

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

function accion()
{
    if (obtenerOpcion()=== "Desplegar informacion"){
        tARespuesta.textContent = info;
    }
    if (obtenerOpcion()=== "Sumar las cuotas"){
        tARespuesta.textContent = suma();
    }
    if (obtenerOpcion()=== "Cuota mayor a 300000"){
        tARespuesta.textContent = mayor300();
    }
    if (obtenerOpcion()=== "Interes menor a 2 %"){
        tARespuesta.textContent = interes2();
    }
    if (obtenerOpcion()=== "Prestamo mayor a 5 millones"){
        tARespuesta.textContent = primer5m();
    }
    if (obtenerOpcion()=== "Incrementar en 90000"){
        tARespuesta.textContent = incremento();
    }
    if (obtenerOpcion()=== "Decrementar en 90000"){
       tARespuesta.textContent = decremento();
    }
    if (obtenerOpcion()=== "Cuotas"){
        tARespuesta.textContent = soloCuotas();
    }
    if (obtenerOpcion()=== "Plazo menor a 1 año"){
        tARespuesta.textContent = doceMeses();
    }
}
