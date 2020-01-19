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

export const CREATE_EVENT = gql`
    mutation CreateEvent($creator: ID!, $name: String!, $date: Date!, $description: String) {
        createEvent(creator: $creator, name: $name, date: $date, description: $description) {
            id,
            name,
            date,
            description
        }
    }
`;

export const SET_MONTH_FOCUS = gql`
    mutation SetMonthFocus($month: Int) {
        setMonthFocus(month: $month) @client
    }
`;

export const SET_YEAR_FOCUS = gql`
    mutation SetYearFocus($year: Int) {
        setYearFocus(year: $year) @client
    }
`;
