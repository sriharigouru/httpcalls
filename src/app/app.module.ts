import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpcallsComponent } from './httpcalls/httpcalls.component';
import {HttpcallserviceService} from './services/httpcallservice.service';
@NgModule({
  declarations: [
    AppComponent,
    HttpcallsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpcallserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
