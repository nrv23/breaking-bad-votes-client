import { ChangeVote, ChangeVotes } from './../../interface/ChangeVotes';
import { CHANGE_VOTE } from './../../@graphql/operations/changeVote';
import { IResponseAddVote } from './../../interface/ResponseAddVote';
import { Observable } from '@apollo/client';
import { ADD_VOTE } from './../../@graphql/operations/AddVote';
import { Apollo } from 'apollo-angular';
import { ApiService } from './../../@graphql/services/api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { CHANGE_VOTES } from 'src/app/@graphql/operations/ChangeVotes';


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

  changeCharacterVotesListener(id: string) {
    return this.suscription(CHANGE_VOTE,{changeVoteId:id, skip:true})
      .pipe(map( result =>  result as ChangeVote))
  }

  changesAllVotesListener() {
    
    return this.suscription(CHANGE_VOTES,{skip: true})
      .pipe(
        map(response => response as ChangeVotes)
      )
  }
}
