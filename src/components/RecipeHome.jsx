import React, { Component } from 'react';
import UsersView from '../views/UsersView'
import HomeView from '../views/HomeView'
import RecipesView from '../views/RecipesView'
import { connect } from 'react-redux'
import {getUsers, getRecipes} from '../redux/reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

import "./ComponentCSS/Home.css";

class HomeDisplay extends Component {

    componentDidMount() {
        this.props.fetchUsers()
        this.props.fetchRecipes()
    }

  render() {
    return (
      <div>
        {<RecipesView allRecipes={this.props.allRecipes}/>}
        {console.log (this.props.allRecips)}

      </div>
    );
  }
}

// Map state to props
const mapState = (state) => {
    return {
        users: state.users,
        allRecipes: state.allRecipes
    }
}

// Map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsers()),
        fetchRecipes: () => dispatch(getRecipes())
        
    }
}

export default connect(mapState, mapDispatch)(HomeDisplay);
