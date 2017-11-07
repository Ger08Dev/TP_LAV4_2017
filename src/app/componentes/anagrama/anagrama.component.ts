import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  miPalabra:any;
  Palabras:any;
  miJuego:JuegoAnagrama;

  constructor(private serv : JuegoServiceService) {
    this.miJuego = new JuegoAnagrama();
    this.miJuego.desordenada = "";
   }

  
    
    
  

  GenerarNuevo(){
    
    this.miJuego = new JuegoAnagrama();
    this.miPalabra = this.Palabras[Math.floor((Math.random() * 32) )];
    this.miJuego.palabra = this.miPalabra["palabra"];
    this.miJuego.desordenada = this.miPalabra["desordenada"];

 }

 Verificar(){
   if(this.miJuego.verificar())
   {
     console.log("gano");
   }
   else 
    console.log("perdio");
   
 }



  ngOnInit() {

      this.serv.TraerPalabas().then(data => { this.Palabras = data; });
     
    }
}
