function mostrar()
{
var precio;
var porcentajeDeDescuento;
var precioFinal;

 precio = parseint (prompt("ingrese precio"));

 porcentajeDeDescuento = parseint (prompt ("ingrese el porcentaje de descuento"));

 precioFinal = precio - (precio * porcentajeDeDescuento /100);

 document.getElementById("elPrecioFinal").value = precioFinal;
}
