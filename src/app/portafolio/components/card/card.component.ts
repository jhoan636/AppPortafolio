import { Component, Input } from '@angular/core';
import { ProjectCard } from '../../interce/project-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: ProjectCard[] | undefined;
}
