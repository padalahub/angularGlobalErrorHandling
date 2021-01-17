import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlErrorComponent } from './form-control-error/form-control-error.component';
import { NumberDirective } from './directives/number.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormControlErrorComponent,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  exports:[NumberDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
