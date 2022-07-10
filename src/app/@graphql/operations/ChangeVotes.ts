import { gql } from 'apollo-angular';
import { CHARACTER_FRAGMENT } from '../fragment/Character';

export const CHANGE_VOTES = gql`
  subscription ChangeVotes( $skip: Boolean!) {
    changeVotes {
        ...CharacterObject
    }
  }

  ${CHARACTER_FRAGMENT}
`;
