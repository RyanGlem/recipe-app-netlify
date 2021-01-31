import React, {Component} from 'react' 
import {Button, Table, InputGroup, FormControl} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'


export const RecipesView = (props) => {

    const handleSumbit = event => {
        event.preventDefault()

    }
        return (
            <div>
                {/*props.recipes.results.map((elem) => {return (<div> {elem.title} <img src= {elem.image} alt=""/></div>)})*/}
                {console.log(props.allRecipes)}
                <InputGroup>
                <FormControl
                    placeholder="Search Recipes"
                />
                </InputGroup>
            </div>
        )
    }
        


export default RecipesView