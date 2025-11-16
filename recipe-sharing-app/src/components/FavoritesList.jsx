import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
    
    const recipes = useRecipeStore(state => state.recipes)
    const favorites = useRecipeStore(state => state.favorites)

    // "Hydrate" the favorite IDs into full recipe objects
    const favoriteRecipes = favorites
        .map(id => recipes.find(recipe => recipe.id === id))
        .filter(Boolean); // this removes any 'undefined' recipes

    return (
        <div style={{ width: '100%' }}>
            <h2>My Favorites</h2>
            {favoriteRecipes.length === 0 ? (
                <p>You haven't favorited any recipes yet.</p>
            ) : (
                favoriteRecipes.map(recipe => (
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

export default FavoritesList;