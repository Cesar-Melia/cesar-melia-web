import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorfolioRoutingModule } from './porfolio-routing.module';
import { PorfolioComponent } from './components/porfolio.component';

@NgModule({
  declarations: [PorfolioComponent],
  imports: [CommonModule, PorfolioRoutingModule],
})
export class PorfolioModule {}
