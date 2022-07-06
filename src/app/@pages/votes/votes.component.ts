import { VotesService } from './votes.service';
import { Character } from './../../interface/Character';
import { CharactersService } from './../characters/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  constructor(
    private characterService: CharactersService,
    private votesService: VotesService
  ) {}

  votesData: Character[] = [];
  addVote(id: string | number) {
    this.votesService.addVote(id).subscribe(
      (response) => {
        const { addVote: {
         // characters,
          status,
          message
        } } = response;


        if(!status) {

        } else {
          
        }
      },
      (err: Error) => {
        console.log({ err });
      }
    );
  }
  ngOnInit(): void {
    this.characterService.getCharacters(true).subscribe(
      (response) => {
        this.votesData = response.characters;
      },
      (err: Error) => {
        console.log({ err });
      }
    );
  }
}
