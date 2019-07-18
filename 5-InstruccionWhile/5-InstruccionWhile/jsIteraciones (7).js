function mostrar()
{
	var numero;

	var acumulador = 0;

	var promedio;
	
	var contador=0;

	var seguir = "s"

	do{

		numero = parseInt(prompt("ingrese un numero"));
		
		acumulador = acumulador + numero;

		contador++;

		seguir = prompt("Quiere ingresar otro numero?");

	} while (seguir == "s");
		
	promedio = acumulador / contador;
	
	document.getElementById("suma").value = acumulador

	document.getElementById("promedio").value = promedio


}//FIN DE LA FUNCIÓN

