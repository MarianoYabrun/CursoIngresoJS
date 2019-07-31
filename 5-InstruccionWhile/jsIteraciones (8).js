function mostrar()
{

	var numero;
    var seguir;
	var numeropositivo;
	var suma = 0;
	var numeronegativo; 
	var multiplicacion = 1;

	do {

	numero = parseInt(prompt("ingrese un número"));
	 
	if( numero > 0){

		numeropositivo = numero;

		suma = suma + numeropositivo;
	}

	if (numero < 0){

		numeronegativo = numero;

     multiplicacion =  multiplicacion * numeronegativo;
	
	}
	 
	 seguir = prompt("quiere seguir ingresando números?");

	}while (seguir == "si");
	
	document.getElementById("suma").value = suma;

	document.getElementById("producto").value = multiplicacion;
}//FIN DE LA FUNCIÓN