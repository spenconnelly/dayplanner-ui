import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Button } from 'reactstrap';

const AddEventButton = props => {
    return (
        <>
            <Button>
                Add Event <IoIosAdd />
            </Button>
        </>
    );
};

export default AddEventButton;
