import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyMaskDirective } from './currency-mask.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, CurrencyMaskDirective ],
   exports: [
    CurrencyMaskDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
