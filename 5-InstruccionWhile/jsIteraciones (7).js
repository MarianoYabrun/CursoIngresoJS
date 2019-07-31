function mostrar()
{

var numero = 0;

var suma = 0;	

var promedio;

var contador = 0;

var seguir; 

do {

 numero = parseInt(prompt("ingrese un número"));
 
suma = suma + numero;

contador ++;

 seguir = prompt("quiere ingresar otro número?");

}while (seguir == "si");

promedio = suma / contador;

document.getElementById("promedio").value = promedio;

document.getElementById("suma").value = suma;

}//FIN DE LA FUNCIÓN