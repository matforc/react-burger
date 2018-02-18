import React from 'react';
import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            
            <NavigationItem link="/" active>Burger Builder</NavigationItem>

            <NavigationItem Link="/">Checkuout</NavigationItem>
        
        </ul>
    );
};

export default NavigationItems;