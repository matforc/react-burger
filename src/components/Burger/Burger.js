import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props /* from containers/BurgerBuilder/BurgerBuilder.js */ ) => {

    let transformedIngredients = Object.keys(props.ingredients)
        /* il metodo Object.keys() qui sopra mi ritorna un Array 
         di ingredienti es. ['salas','cheese','meat'] ecc.., 
        come puoi notare è un array di stringhe con il classico index value (0,1,2 ecc..)
        Sostanzialmente il metodo qui sopra mi serve per prendermi i nomi degli ingredienti 
        che nell'oggetto PROPS.INGREDIENTS erano sotto forma di CHIAVE (di tipo stringa ovviamente
        essendo un Object).
        */
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
             /* Il metodo map(ingKey => qui sopra crea un array per ogni elemento dell'array 
            soprastante (Object.keys ovvero ['salas','cheese','meat'] ecc..), 
            queste array contengono elementi undefined nella stessa quantità 
            del valore dell'oggetto props.ingredients  */   
            .map((_, i) => {
                             return <BurgerIngredient key={ingKey + i} type={ingKey} />
                        }); 

            /* il metodo qui sopra ritorna un componente BurgerIngredient per ogni elemento 
             di ogni array con elementi undefined creata con il metodo map(ingKey => qui sopra, in questo compenente 
             gli si aggiunge un attributo key unico e il tipo */

        })
         /* Il metodo map(ingKey => qui sopra crea un array per ogni elemento dell'array 
            soprastante (Object.keys ovvero ['salas','cheese','meat'] ecc..), 
            queste array contengono elementi undefined nella stessa quantità 
            del valore dell'oggetto props.ingredients  */   
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <p>Please add some ingredient</p>;
        }
        


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}
 
export default burger;