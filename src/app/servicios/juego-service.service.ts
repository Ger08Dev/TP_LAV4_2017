import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { MiHttpService } from '../servicios/mi-http.service';


@Injectable()
export class JuegoServiceService {

  myArrayServicio : Array<Juego>;
  lista:any;
  list:any;

    constructor(private miServicio : MiHttpService) { 
      this.myArrayServicio = new Array<Juego>();
     }
    
     public TraerPalabas(){
       
      return this.miServicio.TraerPalabra().toPromise()
      .then(
      datos=> {
        console.log("Datos:" + datos);
        return datos;
      });
     }
     

    public CargarLista(ArrayParaPasar:Array<Juego>){
      this.myArrayServicio.concat(ArrayParaPasar);
      console.info("En el Servicio: ",ArrayParaPasar);
    }
  
    public InicializarLista(){
  
      return this.myArrayServicio;
    }
  
   }