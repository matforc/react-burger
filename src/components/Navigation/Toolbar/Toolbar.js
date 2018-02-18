import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButtom from '../MenuButton/MenuButton';


const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <MenuButtom clicked={props.openSideDrawer} />
            <Logo height="70%"/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    
    );
};

export default toolbar;