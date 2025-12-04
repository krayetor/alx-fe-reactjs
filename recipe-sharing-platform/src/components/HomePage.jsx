import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);
    }, []);

    return (
        <div className="min-h-screen bg-gray p-4 sm:p-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-10">
                Discover Delicious Recipes
            </h1>

            {/* responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-[1.02] overflow-hidden"
                    >
                        <img 
                            className="w-full h-48 object-cover"
                            src={recipe.image}
                            alt={recipe.title}
                        />

                        <div className="p-6">
                            {/* title */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 truncate">
                                {recipe.title}
                            </h2>

                            {/* summary */}
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {recipe.summary}
                            </p>

                            {/* recipe link (placeholder) */}
                            <a
                                href={`/recipe/${recipe.id}`}
                                className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                View Recipe
                            </a>
                        </div>

                    </div>
                ))}
            </div>

            {/* display if no recipes are loaded */}
            {recipes.length === 0 && <p className="text-center text-gray-600 mt-10">Loading recipes...</p>}
        </div>
    );
};

export default HomePage;