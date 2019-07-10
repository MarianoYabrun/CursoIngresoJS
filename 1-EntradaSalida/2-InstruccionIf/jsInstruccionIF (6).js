function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad < 13) { 
    alert("es niño");

 } 

   else if (edad >= 13 && edad <18) { // otra manera es (edad < 18) porque ya descarte que no es niño en el If anterior.

        alert(" es adolescente");

    } else {

        alert("es adulto ");
    }
    
  }
//FIN DE LA FUNCIÓN