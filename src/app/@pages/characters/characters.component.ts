import { Character, ICharacter } from './../../interface/Character';
import { CharactersService } from './characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private characterService: CharactersService) {}

  charactersList: Character[] = [];

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      (response) => {
        const { characters } = response;
        this.charactersList = characters;
      },
      (err: Error) => {
        console.log(err.message);
      }
    );
  }
}
