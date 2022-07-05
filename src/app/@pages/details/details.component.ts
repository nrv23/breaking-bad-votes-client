import { Character } from './../../interface/Character';
import { DetailsService } from './details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _activeRouter: ActivatedRoute, private detailService: DetailsService) { }

  character: Character | undefined;
  
  ngOnInit(): void {

    this._activeRouter.params.subscribe((params: Params) => {
      this.detailService.getCharacter(params.id)
        .subscribe(({character}) => { // destructuracion de la respuesta directamente en el callback
          this.character = character;
        })
    }, (err: Error) => {
      console.log(err);
    })
  }
}
