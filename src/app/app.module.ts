import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TokenInterceptorService} from './token-interceptor.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{FileUploadModule} from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignedInUserComponent } from './signed-in-user/signed-in-user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './auth.guard';

import{environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignedInUserComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
