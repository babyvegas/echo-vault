import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AppComponent } from './app.component';
import { FiltersRoutingModule } from './filters/filters-routing.module';

const routes: Routes = [
 {
  path: 'callback',
  component: UserInfoComponent
 },
 {
  path: '**',
  redirectTo: 'filters'
},
{
  path: 'filters',
  loadChildren: () => import('./filters/filters.module').then( m => m.FiltersModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
