function mostrar()
{

	var positivo = 0;

	var negativo = 1;

	var producto;

	var acumulador = 0;

	var numero ;
	
	var seguir;

	do
	{
        
      numero = prompt("ingrese un numero");
	  
	  if(numero > 0)
	  {
		  numero = numpos;

		acumulador = acumulador + numpos;
		  
	  }
	
	  if (numero < 0)
	  {
		  negativo *= numero ;
		
		  
		  
		
		  
	  }
	   seguir = prompt("quiere seguir ingresando numeros?");

	} while (seguir == "si");

     acumulador = document.getElementById("suma").value
	 
	 producto = document.getElementById("producto").value
	



}//FIN DE LA FUNCIÓN