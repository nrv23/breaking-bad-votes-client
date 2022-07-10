import { VotesService } from './../votes/votes.service';
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

  constructor(private _activeRouter: ActivatedRoute, 
          private detailService: DetailsService,
          private votesSrvice: VotesService 
  ) { }

  character: Character | undefined;
  loading: boolean = true;

  votar() {
    const id = (this.character?.id) as string;
    this.votesSrvice.addVote(id)
      .subscribe();
  }
  ngOnInit(): void {

    this._activeRouter.params.subscribe((params: Params) => {
      this.detailService.getCharacter(params.id)
        .subscribe(({character}) => { // destructuracion de la respuesta directamente en el callback
          this.character = character;

        setTimeout(() => {
            this.loading = false;
          }, 450);
        })

        this.votesSrvice.changeCharacterVotesListener(params.id).subscribe(response => {
          console.log(response);
        })
    }, (err: Error) => {
      console.log(err);
    })
  }


}
