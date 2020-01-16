import React from 'react';
import { Button } from 'reactstrap';
import CreateEventModal from '../CreateEventModal/CreateEventModal';

const AddEventButton = ({createEventHandler, toggleModal, isModalOpen}) => {

    return (
        <>
            <Button onClick={toggleModal} color="warning">
                <b>Create Event +</b>
            </Button>
            <CreateEventModal
                isOpen={isModalOpen}
                toggle={toggleModal}
                createEventHandler={createEventHandler}
            />
        </>
    );
};

export default AddEventButton;
