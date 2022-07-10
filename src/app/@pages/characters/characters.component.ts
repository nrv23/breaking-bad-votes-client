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
  loading: boolean = true;

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      (response) => {
        const { characters } = response;
        this.charactersList = characters;
        
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
      (err: Error) => {
        console.log(err.message);
      }
    );
  }
}
