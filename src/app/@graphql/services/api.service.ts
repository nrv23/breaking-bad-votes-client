import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult, DocumentNode, Observable } from '@apollo/client';
import { map } from 'rxjs/internal/operators/map';
import { ICharacters } from 'src/app/interface/Character';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  protected query(
    query: DocumentNode,
    variables: object = {},
    context: object = {}
  )  {
    // solo es visible para las clases hijas
    // que heredan este servicio

    return this.apollo
      .watchQuery({
        query,
        variables,
        context,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result: ApolloQueryResult<unknown>) =>  result.data))

  }
}
