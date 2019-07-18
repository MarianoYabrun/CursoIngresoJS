function mostrar()
{
	// esta mal asignar 0 A MIN Y MAX

	var numero;		

	var maximo = 0;

	var minimo = 0;

	var seguir;


	do {
		numero = parseInt(prompt("Ingrese un numero"));

	   if (maximo < numero )
	   {
		   maximo = numero;
	   }

	   if (minimo > numero)
	   {
		   minimo = numero;
	   }

	   seguir = prompt("quiere ingresar otro numero?");

	} while (seguir == "s");

	document.getElementById("maximo").value = maximo;

	document.getElementById("minimo").value = minimo;

		
	
// NO SIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

}//FIN DE LA FUNCIÓN