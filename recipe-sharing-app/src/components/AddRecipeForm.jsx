// AddFormForm component

import React, { useState } from "react";
import { useRecipeStore } from "../store/useRecipeStore";

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim()) {
            alert("Please add a title!");
            return;
        }
        addRecipe({ id: Date.now(), title, description });
        setTitle('');
        setDescription('');
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

export default AddRecipeForm;