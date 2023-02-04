import { ProjectCard } from '../../interce/project-card';
import { Component, OnInit } from '@angular/core';

import data from '../../../../assets/json/data.json';
import dataSkill from '../../../../assets/json/data-skill.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  datos: ProjectCard[] = data ;

  frontend: any = dataSkill.imgFrontend;
  backend: any = dataSkill.imgBackend;

  ngOnInit(): void {

  }
}
