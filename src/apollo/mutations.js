import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation CreateProfile($email: String!) {
        createProfile(email: $email) {
            id,
            email,
            events {
                id,
                name,
                date,
                description
            }
        }
    }
`;
