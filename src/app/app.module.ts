import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlErrorComponent } from './form-control-error/form-control-error.component';
import { NumberDirective } from './directives/number.directive';
import { SuccessComponent } from './success/success.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlErrorComponent,
    NumberDirective,
    SuccessComponent,
    PageNotFoundComponent,
    PersonalInfoComponent,
    BaseComponent
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
