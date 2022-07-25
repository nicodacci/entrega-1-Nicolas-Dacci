/*entrega 1- Nicolas Dacci - 25/7/22 -
abarca lo aprendido hasta la clase 3 JS-
*/

//debugger

let montoSolicitar = 0
let cantidadCuotas = 0
let tipoCredito = ""
let opciones = 0 
let montoDeLaCuota = 0
let costoFinanciero = 1
let solicitud = false
let nombre = ""
let apellido = ""
let login = false
let nombreLogin = ""
let apellidoLogin = ""


//menú de 3 opciones
opciones = parseInt(prompt("Ingrese la opción que desea consultar", "1-Personal, 2-Hipotecario, 3-Prendario"))

//filtro para q se ingrese solo lo correcto
while( (opciones !== 1) && (opciones !==2) && (opciones !==3) ){
    alert("La opción que seleccionó no corresponde")
    opciones = parseInt(prompt("Ingrese la opción que desea consultar", "1-Personal, 2-Hipotecario, 3-Prendario"))
}

//asignaciónes según opciones
switch (opciones){
    case 1:
        tipoCredito = "Personal"
        alert("Usted seleccionó crédito" + tipoCredito)
        cantidadCuotas = 12
        costoFinanciero = 1.8
        break

    case 2:
        tipoCredito = "Hipotecario"
        alert("Usted seleccionó crédito " + tipoCredito)
        cantidadCuotas = 240
        costoFinanciero = 1.1
        break

    case 3:
        tipoCredito = "Prendario"
        alert("Usted seleccionó crédito " + tipoCredito)
        cantidadCuotas = 48
        costoFinanciero = 1.4
        break

    default:
        opciones = parseInt(prompt("Ingrese la opción que desea consultar", "1-Personal, 2-Hipotecario, 3-Prendario"))
    break
} 


montoSolicitar = parseInt(prompt("Ingrese el monto a solicitar", "Sólo números sin coma"))

//cálculos según lo seleccionado
if (tipoCredito == "Personal"){
    montoDeLaCuota = montoSolicitar * costoFinanciero /cantidadCuotas
    montoDeLaCuota = Math.round(montoDeLaCuota)
    costoFinanciero = Math.round((costoFinanciero-1)*100)
    alert("El valor de la cuota es $" + montoDeLaCuota + " y el costo financiero es " + costoFinanciero +"% anual. " + "Cantidad de cuotas: " + cantidadCuotas)

} else if( tipoCredito == "Hipotecario"){
    montoDeLaCuota = montoSolicitar * costoFinanciero/cantidadCuotas
    montoDeLaCuota = Math.round(montoDeLaCuota)
    costoFinanciero = Math.round((costoFinanciero-1)*100)
    alert("El valor de la cuota es $" + montoDeLaCuota + " y el costo financiero es " + costoFinanciero +"% anual. " + "Cantidad de cuotas: " + cantidadCuotas)

} else if( tipoCredito == "Prendario"){
    montoDeLaCuota = montoSolicitar * costoFinanciero/cantidadCuotas
    montoDeLaCuota = Math.round(montoDeLaCuota)
    costoFinanciero = Math.round((costoFinanciero-1)*100)
    alert("El valor de la cuota es $" + montoDeLaCuota + " y el costo financiero es " + costoFinanciero +"% anual. "  + "Cantidad de cuotas: " + cantidadCuotas)
}

//ventana aceptar-cancelar
solicitud = confirm("Desea enviar el formulario de solicitud?")

//ingreso de datos personales con devolucion tipo resumen
if(solicitud){
    nombre = prompt("Ingrese su nombre")    //control para q no envé vacío
        while(nombre == "")
        nombre = prompt("Ingrese su nombre")

    apellido = prompt("Ingrese su apellido")
        while(apellido == "")
        apellido = prompt("Ingrese su apellido")
    
    alert(nombre + " " + apellido + " has solicitado un crédito " + tipoCredito + ". " + "El monto del crédito es de $" + montoSolicitar + ". El valor de la cuota es $" + montoDeLaCuota + " y la cantidad de cuotas es " + cantidadCuotas + ".")
    
} alert ("gracias por usar nuestro simulador")

//consulta y login para usar un ciclo for de 3 iteraciones
if (solicitud){
   login = confirm("Desea consultar el estado de su préstamo?")
   if (login){
    alert("Usted debe ingresar con sus datos personales previamente cargados, solo tendrá 3 intentos")

    for(let i = 2; i >= 0; i--){

        nombreLogin = prompt ("Ingrese su nombre")
        apellidoLogin = prompt ("Ingrese su apellido")

        if (nombreLogin == nombre  &  apellidoLogin == apellido){
            alert(nombre + " " + apellido + ", " + "su crédito " + tipoCredito +" está en evaluación")
            break

        }else {
            alert("su nombre o apellido no son correctos, le quedan " + i + " intentos")
        }
    }
   } 
}
alert ("Hasta luego")







