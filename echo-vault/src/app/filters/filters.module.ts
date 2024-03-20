import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByArtistsComponent } from '../pages/by-artists/by-artists.component';
import { ByTracksComponent } from '../pages/by-tracks/by-tracks.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersRoutingModule } from './filters-routing.module';



@NgModule({
  declarations: [
    ByArtistsComponent,
    ByTracksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FiltersRoutingModule
]
})
export class FiltersModule { }
