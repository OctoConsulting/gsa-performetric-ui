import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewSimulationDetailsComponent } from './view-simulation-details/view-simulation-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'new-simulation', component: SimulationFormComponent },
  { path: 'view-details/:id', component: ViewSimulationDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
