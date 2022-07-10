import { gql } from 'apollo-angular';
import { CHARACTER_FRAGMENT } from '../fragment/Character';
export const CHANGE_VOTE = gql`
  subscription changeIndividualVote($changeVoteId: ID!, $skip: Boolean!) {
    changeVote(id: $changeVoteId) {
      ...CharacterObject
    }
  }

  ${CHARACTER_FRAGMENT}
`;
