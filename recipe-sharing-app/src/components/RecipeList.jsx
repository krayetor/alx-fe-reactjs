// RecipeList component

import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    // get both lists and the search term
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);

    // decide which list to show.
    // on first load, filteredRecipes is empty, so we check recipes.
    // after any action, filteredRecipes is the correct list to use.
    const listToShow = (searchTerm || filteredRecipes.length > 0) ? filteredRecipes : recipes;

    return (
        <div style={{ width: '100%' }}>
            <h2>Recipe List</h2>
            {listToShow.length === 0 ? (
                <p>{searchTerm ? 'No recipes match your search.' : 'No recipes yet. Try adding one!'}</p>
            ) : (
                listToShow.map(recipe => (
                    <div key={recipe.id} className="recipe-card">
                        <Link to={`/recipe/${recipe.id}`}>
                            <h3>{recipe.title}</h3>
                        </Link>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;