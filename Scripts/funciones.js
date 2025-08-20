let datos=[]

function armarInformacion(informacion){
    datos.push(informacion);
    let nombre = informacion.nombre;
    let cuota = informacion.cuota;
    let prestamo = informacion.prestamo;
    let meses = informacion.meses;
    let interes = informacion.interes;

    return `${nombre} debe pagar ${cuota} cada mes por el prestamo de ${prestamo} a ${meses} meses con el interes de ${interes}%`;
}

function calcularcuota(prestamo, interes, meses){
    let cuota= parseInt(prestamo  *( (((1+interes)**meses) * interes) / ( ((1+interes)**meses) - 1)));
    return cuota;
}

function desplegarObjetos(objeto){
    return `Nombre: ${objeto.nombre}, Cuota: ${objeto.cuota}, Prestamo: ${objeto.prestamo}, Meses: ${objeto.meses}, Interes: ${objeto.interes}%`;
}

function suma(){
    let cuotas= datos.map(obj=>obj.cuota);
    let suma= cuotas.reduce((acc, cuota) => acc+cuota, 0);
    return `La suma de todas las cuotas es: ${suma}`;
}

function mayor300(){
    let filtrados = datos.filter(obj => obj.cuota > 300000);
    let res = filtrados.map(desplegarObjetos).join("\n");
    return `Las cuotas mayores a 300000 son:\n ${res}`;
}

function interes2(){
    let objeto = datos.find(obj => obj.interes < 2);
    if (objeto){
        return `El primer objeto con interés menor a 2% es:\n` + desplegarObjetos(objeto);
    } else {
        return "No se encontró ningún objeto con interés menor a 2%";
    }
}

function primer5m(){
    let objeto = datos.find(obj => obj.prestamo > 5000000);
    if (objeto){
        return "El primer préstamo mayor a 5 millones es:\n" + desplegarObjetos(objeto);
    } else {
        return "No se encontró ningún préstamo mayor a 5 millones";
    }
}

function incremento(){
    datos.forEach(obj => obj.cuota += 90000);
    let res = datos.map(desplegarObjetos).join("\n");
    return "Cuotas incrementadas en 90000:\n" + res;    
}

function decremento(){
    datos.forEach(obj => obj.cuota -= 90000);
    let res = datos.map(desplegarObjetos).join("\n");
    return "Cuotas incrementadas en 90000:\n" + res;
}

function soloCuotas(){
    let cuotas = datos.map(obj => obj.cuota);
    return "las cuotas son:\n" + cuotas.join(" - ");
}

function obtenerOpcion() {
    const select = document.getElementById("Accion");
    const indice = select.selectedIndex;
    const texto = select.options[indice].text;
    return texto
}

function doceMeses(){
    let menosDoceMeses = datos.filter(obj=> obj.meses<12);
    let res = menosDoceMeses.map(desplegarObjetos).join("\n");
    return "Los objetos de JS que se deben pagar en menos de un año son: \n" + res;
}

export {armarInformacion};
export {calcularcuota};
export {suma};
export {mayor300};
export {interes2};
export {primer5m};
export {incremento};
export {decremento};
export {soloCuotas};
export {desplegarObjetos};
export {obtenerOpcion};
export {doceMeses};