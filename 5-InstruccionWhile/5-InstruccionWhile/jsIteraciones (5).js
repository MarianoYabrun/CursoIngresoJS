function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase(); // para que si lo ingresas con mayuscula y no en minuscula lo tome bien igual siempre despues lleva ()

while(sexo != 'f' && sexo != 'm'){
    
    alert("Sexo incorrecto: ");
    sexo =  prompt("ingrese f ó m .").toLowerCase; //hay que repetir siempre el ToLowerCase porque lo volves a pedir
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN