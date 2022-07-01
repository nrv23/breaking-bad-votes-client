import { Apollo } from 'apollo-angular';
import { ApiService } from './../../@graphql/services/api.service';
import { ICharacters } from './../../interface/Character';
import { Injectable } from '@angular/core';
import { GET_CHARACTERS } from 'src/app/@graphql/operations/query';

import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends ApiService  {
  // heredar el servicio api

  constructor(apollo :Apollo) {
    super(apollo); // se le pasa el parametro apollo porque es el que va leer las funciones heredadas
  }

  getCharacters() {
    return this.query(GET_CHARACTERS).pipe(
      map((result) => {
        return result as ICharacters;
      })
    );
  }
}
