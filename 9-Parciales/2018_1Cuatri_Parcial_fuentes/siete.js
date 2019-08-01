function mostrar()
{
  // SE VALIDA CON WHILE Y PONIENDO LA CONDICION VERDADERA Y NEGANDOLA ADELANTE.

    var nota;
    var sexo;
    var promedio;
    var peornota;
    var promedio = 0;
    var acumulador = 0;
    var contadorvarones = 0;
    var sexobajo;

    flag = 0;

    for (var contador = 0; contador < 5; contador ++)
    {
        nota = parseInt (prompt("ingrese nota"));

        while(!(nota >= 0 && nota <=10)){
        
        nota = parseInt(prompt("Error, reingrese nota"));

        }
        acumulador = acumulador + nota;
        
        sexo = prompt("ingrese su sexo");

        while (!(sexo == "f" || sexo == "m" )){

            sexo = prompt("sexo invalido. Reingrese sexo");
        }

        if (sexo == "m" && nota >= 6){
         
            contadorvarones ++;
        }
       
        if( nota < peornota || flag == 0){

            peornota = nota;

            sexobajo = sexo;
          
            flag = 1;

        }
        
       
    }
       
        promedio = acumulador / 5 ;

        alert( "el promedio es " + promedio );

        alert ("La cantidad de varones promocionados fue de " + contadorvarones);
    
        alert("La nota mas baja fue un " + peornota + " y su sexo " + sexobajo);
    }
        