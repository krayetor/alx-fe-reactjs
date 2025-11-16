import React from "react";
import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {

    const favorites = useRecipeStore(state => state.favorites)
    const addFavorite = useRecipeStore(state => state.addFavorite)
    const removeFavorite = useRecipeStore(state => state.removeFavorite)

    const isFavorite = favorites.includes(recipeId);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(recipeId);
        } else {
            addFavorite(recipeId);
        }
    };

    return (
        <button onClick={handleToggleFavorite} style={{ marginLeft: '10px' }}>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
    );
};

export default FavoriteButton;