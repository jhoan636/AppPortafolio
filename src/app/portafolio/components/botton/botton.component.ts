import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botton',
  templateUrl: './botton.component.html',
  styleUrls: ['./botton.component.css']
})
export class BottonComponent {
  @Input() text : string | undefined;
  @Input() color : string | undefined;
}
