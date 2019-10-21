import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FirstComponent} from './first/first.component';
import {SecComponent} from './sec/sec.component';
import {RouterModule,Routes} from '@angular/router';

import { DetailService } from './detail.service';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: FirstComponent },
  { path: 'sec', component: SecComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,AppRoutingModule,
    ReactiveFormsModule,
   RouterModule.forRoot(routes)
  
  ],
  exports: [ RouterModule ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
