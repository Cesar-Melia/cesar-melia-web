import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorfolioRoutingModule } from './porfolio-routing.module';
import { PorfolioComponent } from './components/porfolio.component';
import { PorfolioDetailComponent } from './components/porfolio-detail/porfolio-detail.component';

@NgModule({
  declarations: [PorfolioComponent, PorfolioDetailComponent],
  imports: [CommonModule, PorfolioRoutingModule],
})
export class PorfolioModule {}
