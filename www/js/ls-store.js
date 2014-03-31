var LocalStorageStore = function(successCallback, errorCallback) {

    this.MarcarMona = function(idMona, callback) {

        var EstadoMona = this.darEstadoPorId(idMona);
        if(EstadoMona ==null)
            EstadoMona = 'tiene';
        else if (EstadoMona == 'tiene')
            EstadoMona = 'repetida';
        else if (EstadoMona == 'repetida')
            EstadoMona= null;
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

            for(i=0;i<(parseInt(casillaFinal)+1);i++)
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