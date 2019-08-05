function mostrar()
{
 var num;
 var letra;
 var seguir;
 var acumuladorP = 0;
 var contadordepares = 0;
 var contadorimpares = 0;
 var contadordeceros = 0;
 var contadorpositivos = 0;
 var  acumuladorpositivos = 0;
 var acumuladornegativos = 0;
 var  promedio;
 var flag = 0;
 var numeromin;
 var numeromax;
 var letramin;
 var letramax;
 
 do {
   

     letra = prompt("Ingrese una letra");

     num = parseInt(prompt("Ingrese un numero"));
    
     while (!(num < 100 &&  num > -100)){

        num = parseInt(prompt("numero invalido, reingrese numero"));

     }

    
     
    
     if ( num % 2 == 0 &&  num != 0){

        contadordepares ++;


     } else if ( num % 2 == 1 && num != 0)
      { 
        contadorimpares ++;

      }else if (num == 0)
           {
             contadordeceros ++;
    
            }

            
            if (num > 0 )
            {
                contadorpositivos++;
                acumuladorpositivos = acumuladorpositivos + num;
            }
    

            if (num < 0)
            {
             acumuladornegativos = acumuladornegativos + num;
            }

            if (flag == 0 || num > numeromax)
            {
                numeromax = num;
                letramax = letra;
                flag ++;
            }

            if ( flag == 1 || num < numeromin )
            { 
                numeromin = num;
                letramin = letra;
                flag ++;
            }

            seguir = prompt("desea seguir ingresando numeros?");

     } while(seguir == "si");

           promedio = acumuladorpositivos / contadorpositivos;


       document.write(" la cantidad de numeros pares es de " + contadordepares );
       document.write(" la cantidad de numeros impares es de " + contadorimpares);
       document.write(" la cantidad de ceros es de " + contadordeceros);
       document.write(" el promedio es  " + promedio);
       document.write( "la suma de los numeros negatisvos es de " + acumuladornegativos);
       document.write( "la letra maxima es " + letramax + "y el numero maximo es " + numeromax);
       document.write( "la letra minima es " + letramin + "y el numero minimo es " + numeromin);
           
}
