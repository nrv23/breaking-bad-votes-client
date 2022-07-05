import { Character } from './../../../interface/Character';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // recibir datos de otro componente 

  @Input() character: Character | undefined; // lee el valor que viene externo

  constructor() { }

  ngOnInit(): void {
    console.log(this.character)
  }

}
