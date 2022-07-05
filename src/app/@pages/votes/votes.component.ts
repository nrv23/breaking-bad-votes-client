import { Character } from './../../interface/Character';
import { CharactersService } from './../characters/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(private characterService: CharactersService) { }

  votesData: Character[] = [];
  addVote(id: string | number) {
    console.log(id);
  }

  ngOnInit(): void {

    this.characterService.getCharacters(true)
      .subscribe(response => {
        this.votesData = response.characters;
    },(err: Error) => {
      console.log({err});
    } )
  }
}
