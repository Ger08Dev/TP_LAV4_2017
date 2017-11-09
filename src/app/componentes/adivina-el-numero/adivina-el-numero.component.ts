
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
 
  constructor(public miServicio : JuegoServiceService) { 
    this.nuevoJuego = new JuegoAdivina();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=false;
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
  }
  generarnumero() {
    this.nuevoJuego = new JuegoAdivina();
    
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
    this.nuevoJuego.generarnumero();
    this.contador=0;
  }

  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
 
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.numeroSecreto=0;

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          var modelo=this;
          mensaje="La tercera fue la vencida.";
          this.enviarJuego.emit(this.nuevoJuego);
          this.MostarMensaje("Sos un Genio!!!",true);
          this.nuevoJuego.numeroSecreto=0;
          modelo.ocultarVerificar=false;
          break;
         
          
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     

    }
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;

    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
  
   }  
  ngOnInit() {
  }

}
