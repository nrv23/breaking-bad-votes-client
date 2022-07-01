import { ICharacters } from './../../interface/Character';
import { CharactersService } from './characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private characterService: CharactersService) {}

  characters: unknown | ICharacters = [];

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      (response) => {
        const { characters } = response;
        this.characters = characters;
      },
      (err: Error) => {
        console.log(err.message);
      }
    );
  }
}
