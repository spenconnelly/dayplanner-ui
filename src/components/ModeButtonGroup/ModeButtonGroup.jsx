import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { IoIosCalendar, IoIosCheckboxOutline, IoIosChatboxes } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import './ModeButtonGroup.scss';

const ModeButtonGroup = ({className}) => {
    const history = useHistory();

    return (
        <ButtonGroup className={className}>
            <Button color="warning" onClick={() => history.push('/')} ><IoIosCalendar /></Button>
            <Button color="warning" onClick={() => history.push('/')}><IoIosCheckboxOutline /></Button>
            <Button color="warning" onClick={() => history.push('/events')}><IoIosChatboxes /></Button>
        </ButtonGroup>
    );
};

export default ModeButtonGroup;
