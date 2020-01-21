import { gql } from '@apollo/client';

export const GET_CURRENT_USER_PROFILE = gql`
    query {
        userProfile @client {
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

export const GET_CURRENT_FOCUS_DATE = gql`
    query GetCurrentFocusData {
        dayFocus @client
        monthFocus @client
        yearFocus @client
    }
`;

export const GET_CURRENT_EVENTS = gql`
    query {
        userProfile @client {
            events {
                id
                name
                date
                description
            }
        }
    }
`;

export const GET_EVENTS_BY_DATE = gql`
    query GetEventsByDate($date: String) {
        events @client {
            events {
                id
                name
            }
        }
    }
`;

export const GET_USER_PROFILE = gql`
    query ProfileByEmail($id: ID!) {
        profile(id: $id) {
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
