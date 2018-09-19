import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ClientBaseComponent } from './client-base/client-base.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ClientBaseService} from './clientBase.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ClientBaseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ClientBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
