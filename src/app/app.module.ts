import { AuthguardService } from './services/guards/authguard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SignupComponent} from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    RouterModule.forRoot([
      {path:'',component:SignupComponent},
      {path:'welcome',component:WelcomeComponent,canActivate:[AuthguardService]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
