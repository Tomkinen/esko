import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectedlunchComponent } from './selectedlunch/selectedlunch.component';
import { ListlunchComponent } from './listlunch/listlunch.component';
import { LunchdetailsComponent } from './lunchdetails/lunchdetails.component';

import { ApiconnectionService } from "./apiconnection.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectedlunchComponent,
    ListlunchComponent,
    LunchdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiconnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
