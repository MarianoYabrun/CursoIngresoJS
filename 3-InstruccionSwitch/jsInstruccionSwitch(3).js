function mostrar()
{

//alert (mesDelAño); 
	
var mes = document.getElementById("mes").value;

switch(mes)
{
case "Febrero" :

alert("Este mes no tiene más de 29 días.");

break;

default: alert("Este mes tiene 30 o más días");

}


}//FIN DE LA FUNCIÓN