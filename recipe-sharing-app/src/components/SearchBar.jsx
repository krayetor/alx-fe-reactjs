import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {

    const searchTerm = useRecipeStore(state => state.searchTerm);
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    return (
        <input
            type="text"
            placeholder="Search recipes by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '1rem', marginBottom: '20px' }}
        />
    );
};

export default SearchBar;