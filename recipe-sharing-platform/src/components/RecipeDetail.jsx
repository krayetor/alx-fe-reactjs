import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const  RecipeDetail = () => {

    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const recipeId = parseInt(id);

        const foundRecipe = recipesData.find(r => r.id === recipeId);

        if (foundRecipe) {
            setRecipe(foundRecipe);
        } else {
            setRecipe(null);
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className="p-8 text-center text-xl text-gray-700">Loading recipe details...</div>;
    }

    if (!recipe) {
        return <div className="p-8 text-center text-xl text-red-500">Recipe not found.</div>;
    }

    return(
        <div className="min-h-screen bg-gray-50 p-4 sm:p-10">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">

                {/* header image */}
                <img 
                    className="w-ful h-64 object-cover"
                    src={recipe.image}
                    alt={recipe.title}
                />

                <div className="p-6 sm:p-10">
                    {/* title and back link */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
                    <p className="text-gray-600 mb-6 border-b pb-4">{recipe.summary}</p>

                    {/* metadata */}
                    <div className="flex justify-between items-center text-sm mb-8 text-gray-700">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                            Prep Time: {recipe.prepTime}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                            Servings: {recipe.servings}
                        </span>
                    </div>

                    {/* ingredient section */}
                    <div className="mb-10 p-6 bg-gray-50 rounded-lg shadow-inner">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                            Ingredients 🥣
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {recipe.ingredients.map((item, index) => (
                                <li key={index} className="pl-2">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* instructions section */}
                    <div className="mb-10 p-6 bg-gray-50 rounded-lg shadow-inner">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                            Instructions 🧑‍🍳
                        </h2>
                        <ol className="list-decimal list-outside ml-5 space-y-4 text-gray-700">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="font-medium">
                                    <span className="font-bold text-blue-600 mr-2">Step {index + 1}:</span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* back button */}
                    <div className="text-center mt-10">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300 font-semibold"
                        >
                            Back to All Recipes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;