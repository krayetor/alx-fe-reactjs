import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import RecipeDetails from "./RecipeDetails";

const RecommendationsList = () => {
    
    const recommendations = useRecipeStore(state => state.recommendations);
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);


    // call the action to generate recommendations when the components load
    useEffect(() => {
        generateRecommendations();
    },  [generateRecommendations]);

    return (
        <div style={{ width: '100%', marginTop: '30px' }}>
            <h2>Recommendations For You</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations right now. Add more favorites!</p>
            ) : (
                recommendations.map(recipe => (
                    <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
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

export default RecommendationsList;