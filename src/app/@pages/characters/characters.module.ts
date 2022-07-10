import { CardModule } from './../../@shared/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { LoadingModule } from 'src/app/@shared/components/loading/loading.module';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CardModule,
    LoadingModule
  ]
})
export class CharactersModule { }
