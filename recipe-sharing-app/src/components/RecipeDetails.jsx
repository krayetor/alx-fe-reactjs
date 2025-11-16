// RecipeDetails components

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteButton from "./FavoriteButton";

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    const recipes = useRecipeStore(state => state.recipes);
    const recipe = recipes.find(r => r.id === Number(recipeId));

    // console.log('ID from URL:', recipeId);
    // console.log('All recipes in store:', recipes);

    if (!recipe) {
        return (
            <div>
                <h2>Recipe not found.</h2>
                <Link to="/">Back to Home</Link>
            </div>
        );
    }

    return (
        <div style={{ width: '100%' }}>
            <Link to="/">&larr; Back to all recipes</Link>

            {isEditing ? (
                <EditRecipeForm recipe={recipe} onCancel={() => setIsEditing(false)} />
            ) : (
                <div style={{ marginTop: '20px' }}>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
                        <DeleteRecipeButton recipeId={recipe.id} />
                        <FavoriteButton recipeId={recipe.id} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeDetails;
