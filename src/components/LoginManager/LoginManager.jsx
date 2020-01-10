import React, { useState } from 'react';
import { Button } from 'reactstrap';
import LoginModal from '../LoginModal/LoginModal';

const LoginManager = props => {
    const [modal, setModal] = useState(false);
    const [isValidLogin, setIsValidLogin] = useState(true);

    const toggleModal = () => setModal(!modal);

    const login = email => {
        setIsValidLogin(false);
    };

    const register = email => {
        setIsValidLogin(false);
    };

    return (
        <div>
            <Button onClick={toggleModal}>
                Login
            </Button>
            <LoginModal
                isOpen={modal}
                isValidLogin={isValidLogin}
                toggle={toggleModal}
                loginHandler={login}
                registerHandler={register}
            />
        </div>
    );
};

export default LoginManager;
