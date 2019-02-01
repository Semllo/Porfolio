///////////////////////////////////////
// General
///////////////////////////////////////
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

///////////////////////////////////////
// Routes
///////////////////////////////////////
 import { PAGES_ROUTES } from './pages.routes';

///////////////////////////////////////
// Modulos
///////////////////////////////////////
import { CommonModule } from '@angular/common';

///////////////////////////////////////
// Componentes
///////////////////////////////////////
import { DashboardComponent } from './dashboard/dashboard.component';
import { CremotoComponent } from './cremoto/cremoto.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { UserComponent } from './user/user.component';




@NgModule({
        declarations: [
          DashboardComponent,
          CremotoComponent,
          EstadisticasComponent,
          UserComponent,
        ],
        exports: [
        ],
        imports: [
            CommonModule,
            PAGES_ROUTES,
            ChartsModule
          ]

})

export class PagesModule {}
