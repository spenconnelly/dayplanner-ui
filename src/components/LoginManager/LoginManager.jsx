import React, { useState } from 'react';
import ProfileMenuItem from '../ProfileMenuItem/ProfileMenuItem';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import { Button } from 'reactstrap';
import LoginModal from '../LoginModal/LoginModal';
import { REGISTER_USER } from '../../apollo/mutations';
import {
    GET_CURRENT_USER_PROFILE,
    GET_USER_PROFILE_BY_EMAIL
} from '../../apollo/queries';

const LoginManager = () => {
    const client = useApolloClient();

    // Query & Mutation Hooks
    const { data, loading } = useQuery(GET_CURRENT_USER_PROFILE);

    const [registerUser] = useMutation(
        REGISTER_USER, {
            update(cache, { data: { createProfile } }) {
                cache.writeData({
                    data: { ...data, userProfile: createProfile }
                });
            }
        }
    );

    // State Hooks
    const [modal, setModal] = useState(false);
    const [isEmailInUse, setEmailInUse] = useState(false);
    const [isAccountNotFound, setAccountNotFound] = useState(false);

    const toggleModal = () => setModal(!modal);

    const login = async email => {
        const { data: { profileByEmail } } = await client.query({
            query: GET_USER_PROFILE_BY_EMAIL,
            variables: { email }
        });

        if (profileByEmail) {
            setModal(false);
            client.writeData({
                data: { ...data, userProfile: profileByEmail }
            });
            if (isAccountNotFound) setAccountNotFound(false);
        } else {
            setEmailInUse(false);
            setAccountNotFound(true);
        }
    };

    const register = async email => {
        try {
            await registerUser({ variables: { email: email } });
            if (isEmailInUse) setEmailInUse(false);
            setModal(false);
        } catch {
            setAccountNotFound(false);
            setEmailInUse(true);
        }
    };

    if (loading) return null;

    return (
        data && data.userProfile.email ?
        <ProfileMenuItem userEmail={data.userProfile.email} /> :
        <div>
            <Button onClick={toggleModal} color="warning">
                <b>Login</b>
            </Button>
            <LoginModal
                isOpen={modal}
                isEmailInUse={isEmailInUse}
                isAccountNotFound={isAccountNotFound}
                toggle={toggleModal}
                loginHandler={login}
                registerHandler={register}
            />
        </div>
    );
};

export default LoginManager;
