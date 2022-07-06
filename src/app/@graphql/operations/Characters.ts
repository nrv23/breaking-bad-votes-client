import { gql } from 'apollo-angular';
import { CHARACTER_FRAGMENT } from '../fragment/Character';

export const GET_CHARACTERS = gql`

    query Character($skip: Boolean!) {
        characters {
           ...CharacterObject
        }
    }

    ${CHARACTER_FRAGMENT}
`;
