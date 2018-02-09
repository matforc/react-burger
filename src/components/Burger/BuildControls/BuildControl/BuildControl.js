import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
    return (
    <div className={classes.BuildControl}>
        <div className={classesLabel}>{props.label}</div>
        <button classesName={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
    )
}
 
export default buildControl;