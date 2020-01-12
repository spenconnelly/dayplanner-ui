import { gql } from '@apollo/client';

export const GET_CURRENT_USER_PROFILE = gql`
    query {
        userProfile @client
    }
`;
