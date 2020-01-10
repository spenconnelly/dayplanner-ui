import { gql } from '@apollo/client';

export const CREATE_PROFILE = gql`
    mutation CreateProfile($email: String!) {
        createProfile(email: $email) {
            id
            email
        }
    }
`;
