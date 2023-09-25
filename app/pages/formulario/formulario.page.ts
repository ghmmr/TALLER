import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usuario={
    nombre:'',
    email:'',
    edad:'',
    password:'',
    jornada:''
  }


  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async mostrarMensaje(){
      const alert = await this.alertController.create({
        header: 'Gracias!!',
        message: 'Sus datos han sido enviados!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  

  Enviar(){
   
    this.mostrarMensaje();
    this.usuario.nombre='';
    this.usuario.email='';
    this.usuario.password='';
    this.usuario.edad='';
    this.usuario.jornada='';

  }



}
