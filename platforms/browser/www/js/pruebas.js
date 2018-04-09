
function CambioEstadoMonasa(i)
{

	var casillaCambio = "casilla" + i;
	
	//if(document.getElementById("estadoLista").title == "cambio")
	//	{
		if(document.getElementById(casillaCambio).style.background == "white")
		{
			document.getElementById(casillaCambio).style.background="green";
		}
		else if(document.getElementById(casillaCambio).style.background == "green")
		{
			document.getElementById(casillaCambio).style.background="orange";
		}
		else if(document.getElementById(casillaCambio).style.background == "orange")
		{
			document.getElementById(casillaCambio).style.background="white";
		}
	//}
}

function inicializarMonas()
{
var casillaNueva = "casilla" + 1;
	document.write("<div id = '"+casillaNueva+"' class='casillas' style='background:white;color:black' onclick='CambioEstadoMona("+1+");'>"+1);
   		    document.write("</div>");

}
function calcularCompletitud()
{

	var total = 0;
	var estadoCasilla00 = "casilla00";
	var estado00 = window.localStorage.getItem(estadoCasilla00);
	if(estado00 =="tiene"||estado00=="repetida")
		{
			total = total +1;
		}
	for (var i = 0; i<640;i++)
	{
		var estadoCasilla = "casilla" + i;
		var estado = window.localStorage.getItem(estadoCasilla);
		if(estado =="tiene"||estado=="repetida")
		{
			total = total +1;
		}
	}
	var completitud = (total/640)*100
	alert(completitud+"%");
	return (completitud+"%");

}

/*function Actualizar()
{
	if(document.getElementById("estadoLista").title == "cambio")
	{
		document.getElementById("estadoLista").title="bloqueado";
		document.getElementById("btnEstado").value="Actualizar";
	}
	else if(document.getElementById("estadoLista").title == "bloqueado")
	{
		document.getElementById("estadoLista").title="cambio";
		document.getElementById("btnEstado").value="Listo";
	}
}
*/
  	function inicializarCasillas(casillaInicialParam)	
  	{
  		var casillaInicial = casillaInicialParam + ""
		if(casillaInicial=="0")
		{
			var numCasillas=100;
		}
		else if(casillaInicial=="101")
		{
			var numCasillas=200;
		}
		else if(casillaInicial=="201")
		{
			var numCasillas=300;
		}
		else if(casillaInicial=="301")
		{
			var numCasillas=400;
		}
		else if(casillaInicial=="401")
		{
			var numCasillas=500;
		}
		else if(casillaInicial=="501")
		{
			var numCasillas=600;
		}
		else
		{
			var numCasillas=700;
		}

   		for(var i=casillaInicial; i <= numCasillas;i++)
     	{
     	    var casillaNueva = "casilla" + i;
   			document.write("<div id = '"+casillaNueva+"' class='casillas' style='background:white;color:black' onclick='CambioEstadoMona("+i+");'>"+i);
   		    document.write("</div>");
   			
		}
	}	
