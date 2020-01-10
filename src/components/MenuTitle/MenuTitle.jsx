import React from 'react';
import './MenuTitle.scss';

const MenuTitle = props => {
    const {
        titleName
    } = props;

    return (
        <div className="title">
            {titleName}
        </div>
    );
};

export default MenuTitle;
