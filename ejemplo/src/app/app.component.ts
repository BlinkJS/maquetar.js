import { Component } from '@angular/core';
import Maqueta from './maquetar.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  datos = {
    nombre: 'Pablo'
  };

  constructor() {
    let config = {
      contenidos: [
        {
          etiqueta: 'div',
          clases: ['container'],
          contenidos: [
            {
              etiqueta: 'div',
              clases: ['row'],
              contenidos: [
                {
                  etiqueta: 'div',
                  clases: ['col-md-4'],
                  contenidos: 'Nombre'
                },
                {
                  etiqueta: 'div',
                  clases: ['col-md-8'],
                  contenidos: [
                    {
                      etiqueta: 'input',
                      clases: ['form-control'],
                      ngModel: 'datos.nombre'
                    }
                  ]
                }
              ]
            },
            {
              etiqueta: 'div',
              clases: ['row'],
              contenidos: [
                {
                  etiqueta: 'div',
                  clases: ['col-md-4']
                },
                {
                  etiqueta: 'div',
                  clases: ['col-md-8'],
                  contenidos: [
                    {
                      etiqueta: 'ul',
                      contenidos: [
                        {
                          etiqueta: 'li',
                          contenidos: 'aa'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      padre: 'parte_1',
      contexto: this
    };
    let r = new Maqueta(config);
    r.update();
  }

}
