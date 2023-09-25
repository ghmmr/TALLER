import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RespuestaToFeriados } from 'src/app/pages/interfaces/Inferfaz_feriado';

@Injectable({
  providedIn: 'root'
})
export class ApiTallerService {

  constructor(private httpclient: HttpClient) { }

  getTopFeriado(){ 
    return this.httpclient.get<RespuestaToFeriados>('https://api.victorsanmartin.com/feriados/en.json');
  }


}
//RespuestaToHeadLines=RespuestaToFeriados
//getTopHeadLines=getTopFeriado
