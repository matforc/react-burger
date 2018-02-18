import React from 'react';
import classes from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {


    let attachedCLasses = [
        classes.SideDrawer, classes.Close
    ]

    if(props.open) {
        attachedCLasses = [
            classes.SideDrawer, classes.Open
        ]
    }


    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedCLasses.join(' ')}>
                <Logo height="11%"></Logo>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
        
        
    );
};

export default SideDrawer;