import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const filterHelper = (recipes, term) => {
    if(!term) {
        return recipes;
    }
    return recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
    );
};

export const useRecipeStore = create(
    persist (
        (set) => ({
            recipes: [],
            searchTerm: '',
            filteredRecipes: [],

            favorites: [],
            recommendations: [],

            setSearchTerm: (term) => set(state => ({
                searchTerm: term,
                filteredRecipes: filterHelper(state.recipes, term)
            })),

            addRecipe: (newRecipe) => set(state => {
                const newRecipes = [...state.recipes, newRecipe]
                return {
                    recipes: newRecipes,
                    filteredRecipes: filterHelper(newRecipes, state.searchTerm)
                };
            }),

            deleteRecipe: (recipeId) => set(state => {
                const newRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
                return {
                    recipes: newRecipes,
                    filteredRecipes: filterHelper(newRecipes, state.searchTerm),
                    favorites: state.favorites.filter(id => id !== recipeId)
                };
            }),

            updateRecipe: (recipeId, updatedData) => set(state => {
                const newRecipes = state.recipes.map(recipe =>
                    recipe.id === recipeId
                        ? { ...recipe, ...updatedData }
                        : recipe
                );
                return {
                    recipes: newRecipes,
                    filteredRecipes: filterHelper(newRecipes, state.searchTerm)
                };
            }),

            addFavorite: (recipeId) => set(state => {
                // check if it's already a favourite
                if (state.favorites.includes(recipeId)) {
                    return state; // do nothing
                }
                return { favorites: [...state.favorites, recipeId] };
            }),

            removeFavorite: (recipeId) => set(state => ({
                favorites: state.favorites.filter(id => id !== recipeId)
            })),

            generateRecommendations: () => set(state => {
                // mock implementation: recommends 50% of your recipes
                // In real app, this logic would be much more complex
                const recommended = state.recipes.filter(recipe =>
                    Math.random() > 0.5
                );
                // will limit to 3 recommendations for this
                return { recommendations: recommended.slice(0, 3) };
            }),
        }),
        {
            name: 'recipe-storage',
        }
    )
);