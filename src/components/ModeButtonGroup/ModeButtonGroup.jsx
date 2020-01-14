import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { IoIosCalendar, IoIosCheckboxOutline, IoIosChatboxes } from 'react-icons/io';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_CURRENT_USER_PROFILE } from '../../apollo/queries';
import './ModeButtonGroup.scss';

const ModeButtonGroup = ({className}) => {
    // Query & Mutation Hooks
    const { data } = useQuery(GET_CURRENT_USER_PROFILE);

    const history = useHistory();

    return data && data.userProfile.id ?
        <ButtonGroup className={className}>
            <Button onClick={() => history.push('/')} ><IoIosCalendar /></Button>
            <Button onClick={() => history.push('/')}><IoIosCheckboxOutline /></Button>
            <Button onClick={() => history.push('/events')}><IoIosChatboxes /></Button>
        </ButtonGroup>
        : null;
};

export default ModeButtonGroup;
