import React, {Component} from 'react' 
import {Button, Table} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'


export const RecipesView = (props) => {
        return (
            <div>
                {/*props.recipes.results.map((elem) => {return (<div> {elem.title} <img src= {elem.image} alt=""/></div>)})*/}
                {console.log(props.allRecipes)}
            </div>
        )
    }
        


export default RecipesView