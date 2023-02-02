import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './app/shared/shared.component';
import { SharedaComponent } from './shareda/shareda.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    SharedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
