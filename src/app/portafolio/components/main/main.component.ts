import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // Texto enviado a los bottones
  text_contact: string = 'Contact Me';
  text_about: string = 'About Me';
  // llamamos el nombre de la clase para activar los colores
  button_contact: string = 'button_morado';
  button_about: string = 'button_gris'
}
