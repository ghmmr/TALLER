import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }


  //método que envia un saludo
  async Saludar() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      subHeader: 'Bienvenid@!',
      message: 'Que tengas un gran día!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  //método que permite ingresar datos a través de un alert 

  async Ingresar() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos..',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Acerca de ti..',
        },
      ],
    });

    await alert.present();
  }



}
