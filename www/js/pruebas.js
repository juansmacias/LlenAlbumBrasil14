
 function CambioEstadoMona(i)
{
	//if(document.getElementById("estadoLista").title == "cambio")
	//	{
		if(document.getElementById("casilla"+i).style.background == "white")
		{
			document.getElementById("casilla"+i).style.background="green";
		}
		else if(document.getElementById("casilla"+i).style.background == "green")
		{
			document.getElementById("casilla"+i).style.background="orange";
		}
		else if(document.getElementById("casilla"+i).style.background == "orange")
		{
			document.getElementById("casilla"+i).style.background="white";
		}
	//}
}


function Actualizar()
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

  	function inicializarCasillas(casillaInicial)	
  	{
		if(casillaInicial==0)
		{
			var numCasillas=100;
		}
		else if(casillaInicial==101)
		{
			var numCasillas=200;
		}
		else if(casillaInicial==201)
		{
			var numCasillas=300;
		}
		else if(casillaInicial==301)
		{
			var numCasillas=400;
		}
		else if(casillaInicial==401)
		{
			var numCasillas=500;
		}
		else if(casillaInicial==501)
		{
			var numCasillas=600;
		}
		else
		{
			var numCasillas=700;
		}

   		for(var i=casillaInicial; i <= numCasillas;i++)
     	{
     	    document.write("<a onclick='CambioEstadoMona("+i+");return false;'>");
   			document.write("<div id = 'casilla"+i+"' class='casillas' style='background:white;color:black'>"+i);
   		    document.write("</div>");
   			document.write("</a>");
		}
	}	
