import { PieChartModule } from './../../@shared/components/pie-chart/pie-chart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesRoutingModule } from './votes-routing.module';
import { VotesComponent } from './votes.component';


@NgModule({
  declarations: [
    VotesComponent
  ],
  imports: [
    CommonModule,
    VotesRoutingModule,
    PieChartModule
  ]
})
export class VotesModule { }
