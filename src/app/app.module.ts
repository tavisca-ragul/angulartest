import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { RagulComponent } from './ragul/ragul.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    RagulComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
