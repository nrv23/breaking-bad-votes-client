import { gql } from 'apollo-angular';

export const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      actor
      description
      total_episodes
      photo
      votes
      url
    }
  }
`;
