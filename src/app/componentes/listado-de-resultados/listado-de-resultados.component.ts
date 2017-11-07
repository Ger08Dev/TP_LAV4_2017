
import { Component, OnInit , Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: any;



  constructor() {
   

   }

   settings = {
    hideHeader: false,
    hideSubHeader: false,
    pager: {
      display: true,
      perPage: 7,
    },
    actions: false,
    columns: {
      
      nombre: {
        title: 'Nombre Juego'
      },
      jugador: {
        title: 'Jugador'
      },
      gano: {
        title: 'Resultado'
      }

    }
    
  };

  ngOnInit() {

  }

  

}
