// RecipeDetails components

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetials = () => {
    const { recipeId } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    const recipe = recipeStore(state => 
        state.recipes.find(r => r.id === Number(recipeId))
    );

    if (!recipe) {
        return (
            <div>
                <h2>Recipe not found.</h2>
                <Link to="/">Back to Home</Link>
            </div>
        );
    }

    return (
        <div>
            <Link to="/">&larr; Back to all recipes</Link>

            {isEditing ? (
                <EditRecipeForm recipe={recipe} onCancel={() => setIsEditing(false)} />
            ) : (
                <>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                    <button onClick={() => setIsEditing(true)} >Edit Recipe</button>
                    <DeleteRecipeButton recipeId={recipe.id}/>
                </>
            )}
        </div>
    );
};

export default RecipeDetials;