import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'

import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    
    render() { 
        return (  
            <Aux>
                {/*questo sarebbe la props da passare a burger component ingredients={this.state.ingredients}*/}
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Aux> 
            
        )
    }
}
 
export default BurgerBuilder;