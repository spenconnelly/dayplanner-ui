import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_EVENTS } from '../../apollo/queries';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import EventListCard from '../EventListCard/EventListCard';

const EventList = props => {
    // Query & Mutation Hooks
    const { data, loading, error } = useQuery(GET_CURRENT_EVENTS);

    if (error) return null;

    if (loading) return <LoadingIcon />;

    return (
        <div className="card-list--container">
            {data ? data.userProfile.events.map(({ id, name, description, date }) =>
                <EventListCard
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    date={date}
                />) : null}
        </div>
    );
};

export default EventList;
