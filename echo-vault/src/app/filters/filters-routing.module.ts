import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByArtistsComponent } from './pages/by-artists/by-artists.component';
import { ByTracksComponent } from './pages/by-tracks/by-tracks.component';

const routes: Routes = [
  {
    path: 'by-artists',
    component: ByArtistsComponent
  },
  {
    path: 'by-tracks',
    component: ByTracksComponent
  },
  {
    path: '**',
    redirectTo: 'by-tracks'
  }

]
@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class FiltersRoutingModule { }
