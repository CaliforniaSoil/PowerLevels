import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PowerComponentComponent } from './power-component/power-component.component';
import { HumanComponentComponent } from './power-component/human-component/human-component.component';
import { SaiyanComponentComponent } from './power-component/saiyan-component/saiyan-component.component';
import { SuperSaiyanComponentComponent } from './power-component/super-saiyan-component/super-saiyan-component.component';
import { SstwoComponent } from './power-component/sstwo/sstwo.component';
import { SsthreeComponent } from './power-component/ssthree/ssthree.component';
import { SsfourComponent } from './power-component/ssfour/ssfour.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponentComponent,
    HumanComponentComponent,
    SaiyanComponentComponent,
    SuperSaiyanComponentComponent,
    SstwoComponent,
    SsthreeComponent,
    SsfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
