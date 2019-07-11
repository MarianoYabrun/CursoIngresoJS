function mostrar() // la diferencia entre el acumulador y el contador es que el acumulador incremente numeros
 //variables y el contador numeros constantes. ambos deben ser inicializados junto la variable.
{
	var numero;

	var suma = 0;

	var promedio;

	var contador=0;
	

while (contador < 5)
{
	numero = parseInt (prompt("Ingrese un numero"));

	suma = suma + numero;

	contador++;
}
promedio = suma / 5;

document.getElementById("Suma").value = suma;

document.getElementById("Promedio").value = promedio;

}//FIN DE LA FUNCIÓN ..................esta sin resolver....................