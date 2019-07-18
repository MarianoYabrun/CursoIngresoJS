function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(numero < 0 || numero > 10) {

		alert("Dato incorrecto");

		numero = parseInt(prompt("Reingrese numero entre 0 y 10 "))
	}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN