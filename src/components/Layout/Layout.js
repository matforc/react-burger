import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './layout.css'

const layout = (props) => {

    return (

        <Aux>
        <div>Toolbar,Sidedrawer, Bacldrop</div>
    
        <main className={classes.Content}>
            {props.children /*Questo prop.children è BurgerBuilder Component*/}
        </main>
    
        </Aux>
    
    );
}

 
export default layout;