function mostrar()
{
    var num1 = parseInt( prompt("ingrese un número"));
    var num2 = parseInt( prompt("ingrese un número"));
    var suma;
    var resta;

    if (num1 == num2)
    {
      
        alert (num1 + "" + num2);

    } else if ( num1 < num2 ){

        suma = num1 + num2;
        
        alert(" la suma es " + suma);

        if( suma > 10 ){

            alert(" la suma superó los 10");
        }

    }else if (num1 > num2) {

        resta = num1 - num2;

        alert(" la resta es " + resta);

    } 
}