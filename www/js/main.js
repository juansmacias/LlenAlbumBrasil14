var app = {

    MarcarMona: function(idMona) {
        this.store.MarcarMona(idMona,function(EstadoMona) {
            if(EstadoMona == null)
                document.getElementById(idMona).style.background="rgba(255,255,255,0.6)"
            else if (EstadoMona == 'tiene')
                document.getElementById(idMona).style.background="#1d437e"
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
             var monasCargar = eval ("(" + resultado + ")");
            var l = monasCargar.length;
            var mona;
            var color;
            for (var i=0; i<l; i++) {
                mona = monasCargar[i];

                if(mona.estado == 'repetida')
                    color = 'orange';
                else if (mona.estado == 'tiene')
                    color = '#1d437e';
                else
                    color = 'rgba(255,255,255,0.6)';

                if(mona.casilla =='00')
                {
                    $('.container').append('<div id = "casilla' + mona.casilla + '" class="casillas" style="background:'+color+ ';color:red;font-weight: bold;z-index:2"><p style="opacity:0;">'+mona.casilla+'</p></div>');
                }
                else
                {
                    $('.container').append('<div id = "casilla' + mona.casilla + '" class="casillas" style="background:'+color+ ';color:red;font-weight:bold ; z-index:2">'+mona.casilla+'</div>');
                }
            }
        });
    },

    borrarMonas: function()
    {
        this.store.borrarMonas();
    },
    
    mostrarProgreso: function()
    {
        this.store.mostrarProgreso();
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