import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
