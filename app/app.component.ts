import { Component } from '@angular/core';

interface Componente{
  name:string;
  redirecTo: string;
  icon:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[]=[
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    },
    {
      name: 'Alert',
      redirecTo: '/alert',
      icon: 'paw-outline'
    },
    {
      name: 'Action-Sheet',
      redirecTo: '/action-sheet',
      icon: 'sunny-outline'
    },
    {
      name: 'Card',
      redirecTo: '/card',
      icon: 'bug-outline'
    },
    {
      name: 'Inputs',
      redirecTo: '/inputs',
      icon: 'logo-discord'
    },
    {
      name: 'Formulario',
      redirecTo: '/formulario',
      icon: 'logo-amazon'
    },
    {
      name: 'Noticias',
      redirecTo: '/noticias',
      icon: 'logo-twitter'
    },
    {
      name: 'Feriado',
      redirecTo: '/feriado',
      icon: 'calendar-outline'
    },
  ]




}
