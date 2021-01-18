import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: 'personal', component: PersonalInfoComponent},
  {path: 'success', component: SuccessComponent},
  {path: '', redirectTo: '/personal', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
