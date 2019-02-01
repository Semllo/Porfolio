import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';



@NgModule({
        imports: [
                RouterModule,
                CommonModule
        ],
        declarations: [
             TopbarComponent,
             SidebarComponent,
             FooterComponent
        ],
        exports: [
            TopbarComponent,
            SidebarComponent,
            FooterComponent
        ]

})

export class SharedModule {}
