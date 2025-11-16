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
                    filteredRecipes: filterHelper(newRecipes, state.searchTerm)
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
            })
        }),
        {
            name: 'recipe-storage',
        }
    )
);