import { create } from 'zustand'

export const recipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes:
        [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
    deleteRecipe: (recipeId) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
    })),
    updateRecipe: (recipeId, updatedData) => set(state => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === recipeId
                ? { ...recipe, ...updatedData }
                : recipe
        )
    }))
}));