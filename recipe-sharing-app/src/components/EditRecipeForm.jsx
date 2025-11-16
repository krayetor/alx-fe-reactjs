import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onCancel }) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!title.trim()) {
            alert("Title is required");
             return;
        }
        updateRecipe(recipe.id, { title, description });
        onCancel();
    };
    
    return (
        <form onSubmit={handleSubmit} className="recipe-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type="submit">Add Recipe</button>
       </form>
    );    
};

export default EditRecipeForm;