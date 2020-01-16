import React from 'react';
import { useApolloClient } from '@apollo/client';
import { IoIosArrowDown } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import './ProfileMenuItem.scss';

const LoggedInItem = ({ userEmail }) => {
    const client = useApolloClient();
    const history = useHistory();

    return (
        <Button
          className="title"
          color="link"
          onClick={() => {
            client.resetStore();
            history.push('/');
          }}>
            <span>{userEmail}</span>
            <IoIosArrowDown />
        </Button>
    );
};

export default LoggedInItem;
