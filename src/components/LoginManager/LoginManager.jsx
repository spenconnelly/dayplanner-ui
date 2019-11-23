import React from 'react';
import { Button } from 'reactstrap';
import MenuTitle from '../MenuTitle/MenuTitle';

const LoginManager = props => {
    const {
        isAuthenticated,
        userName
    } = props;

    return (
        <>
            { isAuthenticated ?
                <MenuTitle titleName={userName} /> : <Button color="primary" block>Login</Button>
            }
        </>
    );
};

export default LoginManager;
