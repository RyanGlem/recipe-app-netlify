import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RecipesView, ProfileView, FavoritesView, AddRecipeView } from '../views';


const RoutesView = () => {
	return (
		<div>
			<Switch>
                <Route exact path= "/profile" component={ProfileView}/>
				<Route exact path="/recipes" component={RecipesView} />
				<Route exact path="/favorites" component={FavoritesView}/>
                <Route exact path="/addrecipe" component={AddRecipeView}/>
			</Switch>
		</div>
	);
};

export default RoutesView;