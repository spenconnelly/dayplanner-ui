import React, { useState } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import { GET_CURRENT_USER_PROFILE, GET_USER_PROFILE } from '../../apollo/queries';
import ModeButtonGroup from '../ModeButtonGroup/ModeButtonGroup';
import CreateEventButton from '../CreateEventButton/CreateEventButton';
import { CREATE_EVENT } from '../../apollo/mutations';
import './ButtonControls.scss';

const ButtonControls = () => {
    const client = useApolloClient();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Query & Mutation Hooks
    const { data } = useQuery(GET_CURRENT_USER_PROFILE);
    const [createEvent] = useMutation(CREATE_EVENT, {
        async update(cache) {
            const response = await client.query({
                query: GET_USER_PROFILE,
                variables: { id: data.userProfile.id },
                fetchPolicy: 'network-only'
            });

            cache.writeQuery({
                query: GET_CURRENT_USER_PROFILE,
                data: { userProfile: response.data.userProfile }
            });
        }
    });

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const createEventHandler = async (name, date, description) => {
        await createEvent({ variables: {
                creator: data.userProfile.id,
                name,
                date,
                description
            }
        });
        toggleModal();
    };

    return data && data.userProfile.id ?
        <div className="button-controls--container">
            <ModeButtonGroup />
            <CreateEventButton
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
                createEventHandler={createEventHandler}
            />
        </div> : null;
};

export default ButtonControls;
