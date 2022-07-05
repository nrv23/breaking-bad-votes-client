import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [
    CardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule // aqui se importan los modulos que se van a usar
  ],
  exports: [CardComponent]
})
export class CardModule { }
