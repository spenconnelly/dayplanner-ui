import React from 'react';
import MenuTitle from '../MenuTitle/MenuTitle';

import './MenuBar.scss';
import LoginManager from '../LoginManager/LoginManager';

const MenuBar = props => {
    return (
        <div className="menu--container">
            <div className="left--container">
                <MenuTitle>DayPlanner</MenuTitle>
            </div>
            <div className="right--container">
                <LoginManager />
            </div>
        </div>
    );
};

export default MenuBar;
