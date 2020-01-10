import { gql } from '@apollo/client';

export const FIND_PROFILE_BY_EMAIL = gql`
    mutation FindProfileByEmail($email: String!) {
        findProfileByEmail(email: $email) {
            id
            email
            events {
                name
                date
            }
        }
    }
`;
