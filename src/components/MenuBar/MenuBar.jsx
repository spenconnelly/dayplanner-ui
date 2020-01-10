import React from 'react';
import Title from '../MenuTitle/MenuTitle';

import './MenuBar.scss';

const MenuBar = props => {
    return (
        <div className="menu--container">
            <div className="left--container">
                <Title titleName="DayPlanner.io" />
            </div>
            <div className="right--container">
            </div>
        </div>
    );
};

export default MenuBar;
