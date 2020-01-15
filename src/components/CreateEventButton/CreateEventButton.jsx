import React, { useState } from 'react';
import { Button } from 'reactstrap';
import CreateEventModal from '../CreateEventModal/CreateEventModal';

const AddEventButton = props => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!isModalOpen);

    return (
        <>
            <Button onClick={() => setModalOpen(!isModalOpen)} color="warning">
                <b>Create Event +</b>
            </Button>
            <CreateEventModal isOpen={isModalOpen} toggle={toggleModal} />
        </>
    );
};

export default AddEventButton;
