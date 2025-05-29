import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { VolumeHomeComponent } from './pages/volume-home/volume-home';
import { VolumeSectionComponent } from './pages/volume-section/volume-section';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'volume/:id', component: VolumeHomeComponent },
  { path: 'volume/:id/:section', component: VolumeSectionComponent },
  // Optional: Redirect to home for any other unmatched paths
  // { path: '**', redirectTo: '' }
];
