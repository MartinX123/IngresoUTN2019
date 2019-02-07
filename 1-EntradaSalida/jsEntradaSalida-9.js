/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var aumento;
var nsueldo;
sueldo=parseInt(document.getElementById("sueldo").value);
aumento=((10*sueldo)/100);
nsueldo=sueldo+aumento;
document.getElementById("resultado").value=nsueldo;
alert(aumento);




}
