import React from 'react';
import './MenuTitle.scss';

const MenuTitle = props => {
    const {
        children
    } = props;

    return (
        <div className="title">
            {children}
        </div>
    );
};

export default MenuTitle;
