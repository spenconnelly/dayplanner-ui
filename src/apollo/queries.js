import { gql } from '@apollo/client';

export const GET_CURRENT_USER_PROFILE = gql`
    query {
        userProfile @client
    }
`;

export const GET_USER_PROFILE_BY_EMAIL = gql`
    query ProfileByEmail($email: String!) {
        profileByEmail(email: $email) {
            id
            email
            events {
                id
                name
                description
                date
            }
        }
    }
`;
