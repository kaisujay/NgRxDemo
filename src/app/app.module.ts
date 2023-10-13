import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoHttpServiceTsService } from './services/demo.http.service.ts.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DemoReducer } from './@states/reducers/demo.reducer';
import { GetAllDemoEffect } from './@states/effects/get-all-demo.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature('demo', DemoReducer),
    EffectsModule.forFeature([GetAllDemoEffect]),
    AppRoutingModule
  ],
  providers: [DemoHttpServiceTsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
