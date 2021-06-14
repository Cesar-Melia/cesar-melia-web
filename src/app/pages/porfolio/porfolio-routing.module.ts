import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioDetailComponent } from './components/porfolio-detail/porfolio-detail.component';
import { PorfolioComponent } from './components/porfolio.component';

const routes: Routes = [
  { path: '', component: PorfolioComponent },
  { path: '/:name', component: PorfolioDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorfolioRoutingModule {}
