import { Juego } from '../clases/juego'


export class JuegoAnagrama extends Juego{
    palabra:string;
    respuesta:string;
    desordenada: string;
    gano:boolean;
    
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
    }

    verificar(){
        if(this.palabra == this.respuesta.toUpperCase())
        {
            this.gano = true;
        }
        if(this.gano)
           return true;
        else
            return false;
    };

    

}
