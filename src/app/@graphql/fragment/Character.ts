import { gql } from 'apollo-angular';

export const CHARACTER_FRAGMENT = gql`
  fragment CharacterObject on Character {
    # fragament para reutilizar misma respuesta
    id
    name
    actor @skip(if: $skip) #omitir campos
    description @skip(if: $skip) #omitir campos
    total_episodes @skip(if: $skip) #omitir campos
    photo @skip(if: $skip) #omitir campos
    votes
    url @skip(if: $skip) #omitir campos
  }
`;
