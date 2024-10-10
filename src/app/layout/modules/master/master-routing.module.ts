import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './pages/master/master.component';
import { DaysPlanComponent } from './pages/days-plan/days-plan.component';

const routes: Routes = [

  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'landing-page',
        loadChildren: () => import('../../../modules/landing-page/landing-page.module').then(m => m.LandingPageModule),
      },
      { path: 'days-plan', component: DaysPlanComponent }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }