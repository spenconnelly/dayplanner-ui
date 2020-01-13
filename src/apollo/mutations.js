import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation ProfileByEmail($email: String!) {
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
