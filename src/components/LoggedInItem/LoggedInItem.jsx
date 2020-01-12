import React from 'react';
import { useApolloClient } from '@apollo/client';
import { IoIosArrowDown } from "react-icons/io";
import './LoggedInItem.scss';

const LoggedInItem = ({ userEmail }) => {
    const client = useApolloClient();

    return (
        <div className="title" onClick={() => client.writeData({
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
        </div>
    );
};

export default LoggedInItem;
