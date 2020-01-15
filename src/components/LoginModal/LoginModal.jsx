import React, { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
    FormFeedback,
    Label
} from 'reactstrap';

const LoginModal = props => {
    const [input, setInput] = useState('');

    const {
        isOpen,
        toggle,
        isEmailInUse,
        isAccountNotFound,
        loginHandler,
        registerHandler
    } = props;

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Login
            </ModalHeader>
            <ModalBody>
                <Label for="email">Email:</Label>
                <Input
                    invalid={isEmailInUse || isAccountNotFound}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="example@example.com"
                    value={input}
                />
                { isEmailInUse && <FormFeedback>Email already in use.</FormFeedback> }
                { isAccountNotFound && <FormFeedback>Account not found.</FormFeedback> }
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => loginHandler(input)} color="warning">Login</Button>
                <Button onClick={() => registerHandler(input)} color="warning">Register</Button>
            </ModalFooter>
        </Modal>
    );
};

export default LoginModal;
