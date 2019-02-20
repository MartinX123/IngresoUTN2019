function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

switch( mesDelAnio) {
    case("Enero""Junio"):
    alert("falta para el invierno");
        break;
    case "Julio":
    case "Agosto":
        alert( "abrigate que hace frio");
         break;
    case "Septiembre":
    case "Diceimbre":
        alert("ya paso el frio");
         break;
   
}




}//FIN DE LA FUNCIÓN