import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiTallerService } from 'src/app/api-taller.service';
import { DATA } from '../interfaces/Inferfaz_feriado';

@Component({
  selector: 'app-feriado',
  templateUrl: './feriado.page.html',
  styleUrls: ['./feriado.page.scss'],
})
export class FeriadoPage implements OnInit {

  datos: DATA[]=[];

  constructor(private menuController: MenuController,
              private apiTaller: ApiTallerService) { }

  ngOnInit() { //es un método que carga automaticamente lo que se encuentra en el método
    this.apiTaller.getTopFeriado().subscribe(resp =>{ //subscribe es el que recibe lo que se llama y el argumento resp lo recibe
      console.log(resp);
      this.datos.push(...resp.data);
    })
  }

  mostrarMenu2(){
    this.menuController.open('first');
  }

}


//Article=DATA
//ApiService=ApiTallerService
//apiService=apiTaller
//articulos=datos
//getTopHeadLines=getTopFeriado
//articles=data
