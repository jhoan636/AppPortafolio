import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";

import { HomeComponent } from './page/home/home.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { ProjectsComponent } from './components/projects/projects.component';



@NgModule({
    declarations: [
        HomeComponent,
        MainComponent,
        CardComponent,
        ProjectsComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class PortafolioModule { }
