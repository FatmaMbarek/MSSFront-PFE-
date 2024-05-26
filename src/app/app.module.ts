// Core Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Plugin Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Store Module
import { StoreModule } from '@ngrx/store';
import { StoreState } from './store/index';

// App Routing Module & Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountUpModule } from 'ngx-countup';



@NgModule({
  declarations: [
    AppComponent
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(StoreState),
    CountUpModule,

  ],


  providers: [],
  bootstrap: [AppComponent],
  exports: [
  
  
  
  ]
})



export class AppModule { }


