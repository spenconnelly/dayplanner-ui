import React, { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
    Button
} from 'reactstrap';

const CreateEventModal = ({isOpen, toggle}) => {
    const [nameValue, setNameValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [descValue, setDescValue] = useState('');

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Create Event
            </ModalHeader>
            <ModalBody>
                <Label for="Name">Event Name:</Label>
                <Input
                    onChange={(event) => setNameValue(event.target.value)}
                    placeholder="Event Name..."
                    value={nameValue}
                />
                <Label for="Date">Date:</Label>
                <Input
                    onChange={(event) => setDateValue(event.target.value)}
                    placeholder="Event Name..."
                    value={dateValue}
                />
                <Label for="Description">Description:</Label>
                <Input
                    onChange={(event) => setDescValue(event.target.value)}
                    placeholder="Event Name..."
                    value={descValue}
                />
            </ModalBody>
            <ModalFooter>
                <Button color="warning"><b>Create</b></Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateEventModal;
