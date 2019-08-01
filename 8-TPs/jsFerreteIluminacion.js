/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var marca;

    var cantidad; 
    
    var descuento;

    var precio = 35;
    
    var preciofinal;

    var importefinal;
    
    flag = 0;

    cantidad = parseint(document.getElementById("Cantidad").value);

    marca = document.getElementById("Marca").value;

    switch (cantidad){
 
        case 1:
        case 2:
        pdescuento = 0;

        break;

        case 3:

        if( marca == "ArgentinaLuz"){

            pdescuento = 15;

        }else if (marca == "FelipeLamparas"){

            pdescuento = 10;

        }else {

            pdescuento = 5;

          break;

        }
        case 4: 

        if (marca == "ArgentinaLuz" ){


        }

       // lo termino despues

       descuento = precio * pdescuento / 100;

       preciofinal = precio - descuento;

       document.getElementById("precioDescuento")

    }

    importefinal = cantidad * preciofinal;

    if(importefinal > 120){

        IIBB = importefinal * 0.1;

        importefinal = importefinal + IIBB;

        flag = 1;
    }

    alert("el importe a pagar es $ " + importefinal);

    if(flag == 1){

        alert("Usted pagó de IIBB $ " + IIBB);

    }
}
