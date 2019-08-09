function mostrar()
{
    var seguir; 
    var marca;
    var peso;
    var temperatura;
    var contadorpares = 0;
    var productopesado;
    var contadornegativos = 0;
    var promedio;
    var pesomax;
    var pesomin;
    var  flag = 0;
    var marcamax;
    var contador = 0;
    var acumulador = 0;

do{
     marca = prompt("ingrese marca del producto");

     peso = parseInt(prompt("ingrese el peso del producto"));

           while (!( peso >= 1 && peso <=100 ))
           {
            peso = parseInt(prompt("Peso invalido, reingrese el peso del producto"));
           }

           if( flag == 0 || peso > pesomax)
           {
               marcamax = marca;

               pesomax = peso;

               flag ++;
           }
           
           if (flag == 1 || peso < pesomin)
           {
              pesomin = peso;

              flag ++;
           }

            acumulador = acumulador + peso;
           
     temperatura = parseInt(prompt("ingrese la temperatura de almacenamiento del producto "));

              while(!(temperatura <= 30 && temperatura >= -30))
              {
                temperatura = parseInt(prompt("temperatura invalida,reingrese la temperatura de almacenamiento del producto "));
              }
          
              if(temperatura % 2 == 0 && temperatura != 0)
              {
                contadorpares ++;
              }

              if( temperatura < 0)
              {
                 contadornegativos ++;
              }

              contador ++;

    seguir = prompt("quiere seguir ingrensando valores?");


}while (seguir == "si");

             promedio = acumulador / contador;

             document.write(" La cantidad de temperaturas pares es de " + contadorpares + "<br>");

             document.write("La marca del producto mas pesado es " + marcamax + "<br>");

             document.write("La cantidad de productos que se conservan a menos de 0 grados es de " + contadornegativos + "<br>");

             document.write("El promedio del peso de todos los productos es de " + promedio + "<br>");

             document.write("El peso máximo es de " + pesomax + " y el mínimo es de " + pesomin + "<br>");
}



       


//a) La cantidad de temperaturas pares. ,,
//b) La marca del producto más pesado ,,
//c) La cantidad de productos que se conservan a menos de 0 grados. 
//d) El promedio del peso de todos los productos.	
//f) El peso máximo y el mínimo.