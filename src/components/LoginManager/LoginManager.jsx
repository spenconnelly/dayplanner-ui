import React, { useState } from 'react';
import LoggedInItem from '../LoggedInItem/LoggedInItem';
import { GET_CURRENT_USER_PROFILE } from '../../apollo/queries';
import { REGISTER_USER } from '../../apollo/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { Button } from 'reactstrap';
import LoginModal from '../LoginModal/LoginModal';

const LoginManager = props => {
    const { data, loading, error } = useQuery(GET_CURRENT_USER_PROFILE);
    const [registerUser] = useMutation(REGISTER_USER);
    const [modal, setModal] = useState(false);
    const [isValidLogin, setIsValidLogin] = useState(true);

    const toggleModal = () => setModal(!modal);

    const login = email => {
    };

    const register = async email => {
        try {
            await registerUser({ variables: { email: email } });
            setModal(false);
        } catch {
            setIsValidLogin(false);
        }
    };

    if (loading) return null;
    if (error) return null;

    return (
        data.userProfile.email ?
        <LoggedInItem userEmail={data.userProfile.email} /> :
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
