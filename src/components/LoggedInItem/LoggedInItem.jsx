import React from 'react';
import { useApolloClient } from '@apollo/client';
import { IoIosArrowDown } from "react-icons/io";
import { Button } from 'reactstrap';
import './LoggedInItem.scss';

const LoggedInItem = ({ userEmail }) => {
    const client = useApolloClient();

    return (
        <Button
          className="title"
          color="link"
          onClick={() => client.writeData({
            data: {
              userProfile: {
                id: null,
                email: null,
                events: []
              }
            }
          })}>
            <span>{userEmail}</span>
            <IoIosArrowDown />
        </Button>
    );
};

export default LoggedInItem;
