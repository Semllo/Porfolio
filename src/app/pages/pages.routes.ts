import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { CremotoComponent } from './cremoto/cremoto.component';
import { UserComponent } from './user/user.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';


const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        // canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }  },
            { path: 'cremoto', component: CremotoComponent, data: { titulo: 'Control remoto' }  },
            { path: 'user', component: UserComponent, data: { titulo: 'Datos de usuario' }  },
            { path: 'estadisticas', component: EstadisticasComponent, data: { titulo: 'Estadisticas' }  },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'  }
        ]

    }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
