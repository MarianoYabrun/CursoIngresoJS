function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota = Math.floor(Math.random () * 10 + 1);

	if(nota >= 9 ){

		alert(nota + "  excelente");
	}
	else if (nota >= 4){

		alert(nota + "  aprobo");
	}
    else {
		alert (nota  + "  vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN