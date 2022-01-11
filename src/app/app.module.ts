import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MayusculasPipe
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
