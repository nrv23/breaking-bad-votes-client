import { gql } from 'apollo-angular';
import { CHARACTER_FRAGMENT } from '../fragment/Character';

export const ADD_VOTE = gql`
  mutation Mutation($character: ID!,$skip: Boolean!) {
    addVote(character: $character) {
      status
      message
      characters {
        ...CharacterObject
      }
    }
  }

  ${CHARACTER_FRAGMENT}
`;
