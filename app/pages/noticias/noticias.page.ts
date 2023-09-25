import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  articulos: Article[]=[]; //recibe los arreglos que vienen de la api

  constructor(private menuController: MenuController,
              private apiService: ApiService) { }

  ngOnInit() { //es un método que carga automaticamente lo que se encuentra en el método
    this.apiService.getTopHeadLines().subscribe(resp =>{ //subscribe es el que recibe lo que se llama y el argumento resp lo recibe
      console.log(resp);
      this.articulos.push(...resp.articles);
    })
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
