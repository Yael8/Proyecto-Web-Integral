import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_4';

  constructor(){
    console.log('Nuevas funciones');
    console.warn('Cuidado');
    console.log('Pruebas de condlictos');
  }
}
