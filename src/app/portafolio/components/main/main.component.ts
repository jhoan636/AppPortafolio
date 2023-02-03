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
  // Enviamos el tipo de color que buscamo usar
  button_contact: string = 'morado';
  button_about: string = 'gris'
}
