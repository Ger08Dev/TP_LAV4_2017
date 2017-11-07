import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listadoParaCompartir: Array<Juego>;
  lista:any;
  
  constructor(public servicioJuego:JuegoServiceService) { 
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    //this.lista = JSON.stringify(this.listadoParaCompartir);
    }
  
  ngOnInit() {
    
    
  }

  
  
}
