import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER_PROFILE } from '../../apollo/queries';
import ModeButtonGroup from '../ModeButtonGroup/ModeButtonGroup';
import AddEventButton from '../AddEventButton/AddEventButton';
import './ButtonControls.scss';

const ButtonControls = () => {
    // Query & Mutation Hooks
    const { data } = useQuery(GET_CURRENT_USER_PROFILE);

    return data && data.userProfile.id ?
        <div className="button-controls--container">
            <ModeButtonGroup />
            <AddEventButton />
        </div> : null;
};

export default ButtonControls;
