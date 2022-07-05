import { gql } from 'apollo-angular';

export const GET_CHARACTERS = gql`

    query Character($skip: Boolean!) {
        characters {
            id
            name
            actor @skip(if: $skip) #omitir campos
            description @skip(if: $skip) #omitir campos
            total_episodes @skip(if: $skip) #omitir campos
            photo @skip(if: $skip) #omitir campos
            votes
            url @skip(if: $skip) #omitir campos
        }
    }
`;
