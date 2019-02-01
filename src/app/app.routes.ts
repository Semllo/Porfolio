import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent  },
    // { path: 'register', component: RegistreComponent  },
    { path: '', component: PagesComponent },
    { path: '**', component: LoginComponent }

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
