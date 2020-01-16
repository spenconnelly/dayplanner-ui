import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './CreateEventModal.scss';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
    Button
} from 'reactstrap';

const CreateEventModal = ({isOpen, toggle, createEventHandler}) => {
    const [nameValue, setNameValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [dateValue, setDateValue] = useState('');

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Create Event
            </ModalHeader>
            <ModalBody>
                <Label for="Name">Event Name:</Label>
                <Input
                    className="text-input"
                    onChange={(event) => setNameValue(event.target.value)}
                    placeholder="Event Name..."
                    value={nameValue}
                />
                <Label for="Description">Description:</Label>
                <Input
                    className="text-input"
                    onChange={(event) => setDescValue(event.target.value)}
                    placeholder="Event Name..."
                    value={descValue}
                />
                <div>Date:</div>
                <DateTimePicker
                    className="date-picker"
                    onChange={setDateValue}
                    value={dateValue}
                />
            </ModalBody>
            <ModalFooter>
                <Button
                    disabled={!nameValue || !dateValue}
                    onClick={() => createEventHandler(nameValue, dateValue, descValue)}
                    color="warning"
                ><b>Create</b></Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateEventModal;
