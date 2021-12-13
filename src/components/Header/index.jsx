import React from 'react';
import './index.scss';

const Header = (props) => {

    const { openInput } = props;

    return (
        <div className="header">
            <h1>事件代办</h1>
            <span
                className="icon"
                onClick={ openInput }
            >&#43;</span>
        </div>
    );
};

export default Header;