import { IResponseAddVote } from './../../interface/ResponseAddVote';
import { Observable } from '@apollo/client';
import { ADD_VOTE } from './../../@graphql/operations/AddVote';
import { Apollo } from 'apollo-angular';
import { ApiService } from './../../@graphql/services/api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotesService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  addVote(character: string | number) {
    return this.mutation(ADD_VOTE, { character, skip: true })
    .pipe(
      map((response) => response as IResponseAddVote )
    );
  }
}
