function mostrar()
{
	var numero;
	var suma = 0;
	var promedio;
	var contador=0;
	
	while( contador < 5){

		numero = parseInt(prompt("Ingrese un numero: "));
		suma = suma + numero; //suma += numero

		contador++; //contador = contador 
	}

	promedio = suma / 5;
	
	document.getElementById("suma").value = suma
	document.getElementById("promedio").value = promedio


}//FIN DE LA FUNCIÓN