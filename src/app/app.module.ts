///////////////////////////////////////
// General
///////////////////////////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

///////////////////////////////////////
// Componentes
///////////////////////////////////////
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { PagesComponent } from './pages/pages.component';

///////////////////////////////////////
// Modulos
///////////////////////////////////////
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.modulo';

///////////////////////////////////////
// Routes
///////////////////////////////////////
import { APP_ROUTES } from './app.routes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    SharedModule,
    NoopAnimationsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

