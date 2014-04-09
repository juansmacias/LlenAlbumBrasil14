var LocalStorageStore = function(successCallback, errorCallback) {

    this.MarcarMona = function(idMona, callback) {

        var EstadoMona = this.darEstadoPorId(idMona);
        if(EstadoMona == null)
        {
            EstadoMona = 'tiene';
            if(window.localStorage.getItem('total')==null)
            {
            	window.localStorage.setItem('total',0);
            }
            else
            {
            	var total = window.localStorage.getItem('total');
            	total ++;
            	window.localStorage.setItem('total',total);
            }
           } 
        else if (EstadoMona == 'tiene')
            EstadoMona = 'repetida';
        else if (EstadoMona == 'repetida')
        {
            EstadoMona= null;
            var total = window.localStorage.getItem('total');
            	total --;
            	window.localStorage.setItem('total',total)
            	}
        this.cambiarEstadoPorID(idMona,EstadoMona)
        callLater(callback, EstadoMona);
    }

    this.darEstadoPorId = function(idMona)
    {
        return window.localStorage.getItem(idMona);
    }

    this.cambiarEstadoPorID = function(idMona,estadoMona)
    {
        if(estadoMona==null)
            window.localStorage.removeItem(idMona)
        else
            window.localStorage.setItem(idMona,estadoMona)
    }

    this.cargarEstado = function(casillaInicial, casillaFinal,callback){
        var jsonCargar = '[';
        var idMona = '';
        if (casillaInicial == '00')
        {
            idMona = 'casilla' + casillaInicial;
            jsonCargar += '{"casilla": "00" , "estado": "'+this.darEstadoPorId(idMona)+'"},';

            for(i=1;i<(parseInt(casillaFinal)+1);i++)
            {
                idMona = 'casilla' + i;
                if(i==parseInt(casillaFinal))
                {
                    jsonCargar += '{"casilla": "'+i+'" , "estado": "'+this.darEstadoPorId(idMona)+'"}]';
                }
                else
                {
                    jsonCargar += '{"casilla": "'+i+'" , "estado": "'+this.darEstadoPorId(idMona)+'"},';
                }
            }
        }
        else
        {
            for(i=parseInt(casillaInicial);i<(parseInt(casillaFinal)+1);i++)
            {
                idMona = 'casilla' + i;
                if(i==parseInt(casillaFinal))
                {
                    jsonCargar += '{"casilla": "'+i+'" , "estado": "'+this.darEstadoPorId(idMona)+'"}]';
                }
                else
                {
                    jsonCargar += '{"casilla": "'+i+'" , "estado": "'+this.darEstadoPorId(idMona)+'"},';
                }
            }
        }
        callLater(callback, jsonCargar);
    }

    this.borrarMonas = function()
    {
        window.localStorage.clear();
    }


	this.mostrarProgreso = function()
    {
        return window.localStorage.getItem('total');
    }
    
    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

}