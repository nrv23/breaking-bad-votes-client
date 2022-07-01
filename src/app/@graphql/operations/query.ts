import { gql } from 'apollo-angular';

export const GET_CHARACTERS = gql`

    query Character {
        characters {
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
