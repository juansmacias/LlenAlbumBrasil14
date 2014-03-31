var app = {

    MarcarMona: function(idMona) {
        this.store.MarcarMona(idMona,function(EstadoMona) {
            if(EstadoMona == null)
                document.getElementById(idMona).style.background="white"
            else if (EstadoMona == 'tiene')
                document.getElementById(idMona).style.background="green"
            else
                document.getElementById(idMona).style.background="orange"
        });
    },
    darEstadoPorId: function(idMona)
    {
      return this.store.darEstadoPorId(idMona);
    },

    cargarEstado: function(casillaInicial, casillaFinal){
        this.store.cargarEstado(casillaInicial, casillaFinal,function(resultado)
        {
            debugger;
             var monasCargar = eval ("(" + resultado + ")");
            var l = monasCargar.length;
            var mona;
            var color;
            for (var i=0; i<l; i++) {
                mona = monasCargar[i];

                if(mona.estado == 'repetida')
                    color = 'orange';
                else if (mona.estado == 'tiene')
                    color = 'green';
                else
                    color = 'white';

                if(mona.casilla =='00')
                {
                    $('.container').append('<div id = "casilla' + mona.casilla + '" class="casillas" style="background:'+color+ ';color:black">'+mona.casilla+'</div>');
                }
                else
                {
                    $('.container').append('<div id = "casilla' + mona.casilla + '" class="casillas" style="background:'+color+ ';color:black">'+mona.casilla+'</div>');
                }
            }
        });

    },

	showAlert: function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
},

    initialize: function() {
		var self = this; 
        this.store = new LocalStorageStore();
    }

};

app.initialize();