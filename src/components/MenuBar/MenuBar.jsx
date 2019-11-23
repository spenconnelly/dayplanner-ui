import React from 'react';
import LoginManager from '../LoginManager/LoginManager';
import Title from '../MenuTitle/MenuTitle';

import './MenuBar.scss';

const MenuBar = props => {
    return (
        <div className="menu--container">
            <div className="left--container">
                <Title titleName="DayPlanner.io" />
            </div>
            <div className="right--container">
                <LoginManager />
            </div>
        </div>
    );
};

export default MenuBar;
