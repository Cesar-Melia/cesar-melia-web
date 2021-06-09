import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorfolioRoutingModule } from './porfolio-routing.module';
import { PorfolioComponent } from './porfolio.component';


@NgModule({
  declarations: [
    PorfolioComponent
  ],
  imports: [
    CommonModule,
    PorfolioRoutingModule
  ]
})
export class PorfolioModule { }
