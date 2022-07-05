import { GET_CHARACTER } from './../../@graphql/operations/Character';
import { Apollo } from 'apollo-angular';
import { ApiService } from './../../@graphql/services/api.service';
import { ICharacter } from './../../interface/Character';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class DetailsService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  getCharacter(id: string) {
    return this.query(GET_CHARACTER, { id }).pipe(
      map((response) => response as ICharacter)
    );
  }
}
