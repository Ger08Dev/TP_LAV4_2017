import { Injectable } from '@angular/core';

import {Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { log } from 'util';

@Injectable()
export class MiHttpService {
  
  constructor(public http:Http) { }

  public TraerPalabra(): Observable<Response>{
    return this.http
    .get("../TP_LAV4_2017/assets/palabras.json")
    .map(this.extraerDatos)
    .catch(this.handleError);
  }
  
  public httpGetJuagdorPromise(url: string, objeto:any){
    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }
  public httpGetJuagdorPromiseO(url: string): Observable<Response>{
    
    return this.http.get( url )
    .map( ( res: Response ) => res.json())
    .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
   }

  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }

}
