import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';
import { ProgramingComponent } from './programing/programing.component';
import { OtrasComponent } from './otras/otras.component';
import { FullstacksComponent } from './fullstacks/fullstacks.component';
import { LearningComponent } from './learning/learning.component';



const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        // canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }  },
            { path: 'curriculum', component: CurriculumComponent, data: { titulo: 'Curriculum' }  },
            { path: 'aboutme', component: SobreMiComponent, data: { titulo: 'Aboutme' }  },
            { path: 'projects', component: MisProyectosComponent, data: { titulo: 'Projects' }  },
            { path: 'courses', component: MisCursosComponent, data: { titulo: 'Courses' }  },
            { path: 'prga', component: ProgramingComponent, data: { titulo: 'Programing' }  },
            { path: 'other', component: OtrasComponent, data: { titulo: 'others' }  },
            { path: 'fullstacks', component: FullstacksComponent, data: { titulo: 'fullstacks' }  },
            { path: 'learning', component: LearningComponent, data: { titulo: 'learning' }  },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'  }
        ]

    }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
