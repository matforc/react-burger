import React from 'react';
import classes from './MenuButton.css';

const MenuButtom = (props) => {
    return (
        
        <div className={classes.Hamburger} onClick={props.clicked}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
    );
};

export default MenuButtom;