/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
    var edad;
    var x="usted se llama";
    var y="y tiene";
    var d="años;"
    nombre=document.getElementById("elNombre").value;
    edad=document.getElementById("laEdad").value;
    alert(x+""+nombre+""+y+""+edad+""+d);
}

