import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    
    //Siccome da props ci arriverebbe un oggetto e non un array, dobbiamo convertire ingredient obj 
    //in array cosi da estrapolare un key name per ogni inglredient e risalire anche al valore di
    //questo key name, che non è altro che la quantità, qui di seguito viene mostrato come
    
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
                return [...Array(props.ingredients[ingredientKey])].map((elm, i) => {
                    return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                });
        });




    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}
 
export default burger;