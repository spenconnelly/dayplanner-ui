import React from 'react';
import './Title.scss';

const Title = ({className, children}) => (
    <div className={`title--modifer ${className}`}>
        {children}
    </div>
);

export default Title;
