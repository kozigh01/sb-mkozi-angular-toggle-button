import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatButtonToggleModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
