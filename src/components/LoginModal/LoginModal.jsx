import React, { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button
} from 'reactstrap';

const LoginModal = props => {
    const [input, setInput] = useState('');

    const {
        isOpen,
        toggle,
        isValidLogin,
        loginHandler,
        registerHandler
    } = props;

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Login
            </ModalHeader>
            <ModalBody>
                <Input
                    invalid={!isValidLogin}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="example@example.com"
                    value={input}
                />
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => loginHandler(input)} color="primary">Login</Button>
                <Button onClick={() => registerHandler(input)} color="primary">Register</Button>
            </ModalFooter>
        </Modal>
    );
};

export default LoginModal;
