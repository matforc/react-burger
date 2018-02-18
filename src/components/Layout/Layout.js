
import Aux from '../../hoc/Aux';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


import React, { Component } from 'react';

class Layout extends Component {

        state = {
            showSiteDrawer: false
        }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSiteDrawer: false
        })
    }

    sideDrawerOpendHandler = () => {
        this.setState((prevState) => {
            return {showSiteDrawer: !prevState.showSiteDrawer}
        })
    }


    render() {
        return (
            <Aux>
                <Toolbar openSideDrawer={this.sideDrawerOpendHandler} />
                <SideDrawer open={this.state.showSiteDrawer} closed={this.sideDrawerClosedHandler}/>
            
                <main className={classes.Content}>
                    {this.props.children /*Questo prop.children è BurgerBuilder Component*/}
                </main>
        
            </Aux>
        );
    }
}

export default Layout;