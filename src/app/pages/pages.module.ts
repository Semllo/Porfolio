///////////////////////////////////////
// General
///////////////////////////////////////
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

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
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { ProgramingComponent } from './programing/programing.component';
import { FullstacksComponent } from './fullstacks/fullstacks.component';
import { OtrasComponent } from './otras/otras.component';
import { LearningComponent } from './learning/learning.component';




@NgModule({
        declarations: [
          DashboardComponent,
          CurriculumComponent,
          SobreMiComponent,
          MisProyectosComponent,
          MisCursosComponent,
          ProgramingComponent,
          FullstacksComponent,
          OtrasComponent,
          LearningComponent,
        ],
        exports: [
        ],
        imports: [
            CommonModule,
            PAGES_ROUTES,
            ChartsModule,
            SweetAlert2Module.forRoot()
          ]

})

export class PagesModule {}
