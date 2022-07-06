import { CHARACTER_FRAGMENT } from '../fragment/Character';
import { gql } from 'apollo-angular';

export const GET_CHARACTER = gql`
  query Character($id: ID!,$skip: Boolean!) {
    character(id: $id) {
      ...CharacterObject # usar el fragment
    }
  }

  ${CHARACTER_FRAGMENT} # reulilizar un fragment
`;
