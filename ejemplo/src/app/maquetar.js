export default function Maqueta(config = {}) {
    this.contenidos = config.contenidos || [];
    this.padre = config.padre || 'maqueta';

    var instancia = config.instancia || 0;
    var contexto = config.contexto || null;
    var ngModels = [];

    this.set_ids = function (contenidos = this.contenidos, padre = this.padre) {
        for (let i = 0; i < contenidos.length; i++) {
            contenidos[i].id = padre + i.toString();
            if (Array.isArray(contenidos[i].contenidos)) this.set_ids(contenidos[i].contenidos, contenidos[i].id);
        }
    }

    this.maquetar = function (contenidos = this.contenidos, padre = this.padre) {
        setTimeout(() => {
            for (var i = 0; i < contenidos.length; i++) {
                contenidos[i].clases = contenidos[i].clases || []
                var str = '<' + contenidos[i].etiqueta + ' class="' + contenidos[i].clases.join(' ') + '" id="' + contenidos[i].id + '"';
                if (contenidos[i].ngModel) {
                    ngModels.push(contenidos[i]);
                    str += ' value="' + eval('contexto.' + contenidos[i].ngModel) + '"';
                }
                str += '>';
                document.getElementById(padre).innerHTML += str;
            }
            for (var i = 0; i < contenidos.length; i++) {
                if (Array.isArray(contenidos[i].contenidos)) this.maquetar(contenidos[i].contenidos, padre = contenidos[i].id); else if (contenidos[i].contenidos) document.getElementById(contenidos[i].id).innerHTML += contenidos[i].contenidos;
            }
        }, 0);
    }

    this.update = function () {
        for (let contenido of ngModels) {
            document.getElementById(contenido.id).value = eval('contexto.' + contenido.ngModel);
        }
    }

    this.set_ids();
    this.maquetar();

    setInterval(() => {
        for (let contenido of ngModels) {
            eval('contexto.' + contenido.ngModel + '="' + document.getElementById(contenido.id).value + '"');
        }
    }, 1000);

}