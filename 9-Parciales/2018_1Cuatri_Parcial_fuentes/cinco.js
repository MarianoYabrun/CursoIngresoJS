function mostrar()
{
 var planeta = prompt ("ingrese un planeta");
 
 while (planeta != "mercurio" && planeta != "venus" && planeta != "tierra" && planeta != "marte" && planeta != "jupiter" && planeta != "saturno" && planeta !="urano" && planeta !="neptuno"){

   planeta = prompt("planeta no valido, reingrese planeta.");
 }

  switch (planeta){

    case "mercurio":

    case " venus":

        alert(" aca hace mas calor");

        break;

    case "tierra":

      alert("aca vivmos");

      break;

      case "marte":
    
      case "jupiter":

      case "saturno":

      case "urano":

      case "neptuno":

      alert(" aca hace mas frio");

      break;



  }
    
  }

