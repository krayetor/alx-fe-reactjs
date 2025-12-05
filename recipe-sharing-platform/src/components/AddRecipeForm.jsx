import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddRecipeForm = () => {
    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        image: '',
        summary: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;
        
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.title.trim()) {
            newErrors.title = 'Recipe title is required.';
        }
        if (!formData.ingredients.trim()) {
            newErrors.ingredients = 'Ingredients list is required.';
        } else if (formData.ingredients.split('\n').filter(i => i.trim()).length < 2) {
            newErrors.ingredients = 'Please list at least two ingredients (separated by new lines).';
        }
        if (!formData.instructions.trim()) {
            newErrors.instructions = 'Preparation steps are required.';
        }
        if (!formData.summary.trim()) {
            newErrors.summary = 'A short summary is required.';
        }
        if (formData.image.trim()) {
            newErrors.image = 'Image must be a valid URL.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validate()) {
            console.log('Recipe Data Submitted:', formData);

            setTimeout(() => {
                alert(`Recipe "${formData.title}" submitted successfully! (No back integration yet)`);
                setIsSubmitting(false);
                navigate('/');
            }, 1500);
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <div className="max-w-3xl mx:auto bg-white p-6 sm:p-10 shadow-2xl rounded-xl">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-8 border-b pb-4">
                    Submit Your Recipe
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* responsive layout grid for title and image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* recipe title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Recipe Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={formData.title}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.title ? 'border-red-500': 'border-gray-300'}`}
                                placeholder="Spicy Thai Green Cury"
                            />
                            {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
                        </div>

                        {/* image url */}
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                value={formData.image}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.image ? 'border-red-500': 'border-gray-300'}`}
                                placeholder="https://example.com/image.jpg"
                            />
                            {errors.title && <p className="mt-1 text-xs text-red-500">{errors.image}</p>}
                        </div>
                    </div>

                    {/* summary */}
                    <div>
                        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Short Summary</label>
                        <textarea
                            name="summary"
                            id="summary"
                            rows="2"                                value={formData.summary}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.summary ? 'border-red-500': 'border-gray-300'}`}
                            placeholder="A brief, appetizing description."
                        />
                        {errors.summary && <p className="mt-1 text-xs text-red-500">{errors.summary}</p>}
                    </div>

                    {/* ingredients */}
                    <div>
                        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">Ingredients (One item per line)</label>
                        <textarea
                            name="ingredients"
                            id="ingredients"
                            rows="6"
                            value={formData.ingredients}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.ingredients ? 'border-red-500': 'border-gray-300'}`}
                            placeholder="e.g., 2 large eggs&#10;50g Pecorino cheese&#10;100g panecetta"
                        />
                        {errors.ingredients && <p className="mt-1 text-xs text-red-500">{errors.ingredients}</p>}
                    </div>

                    {/* instructions */}
                    <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">Preparation (One step per line)</label>
                        <textarea
                            name="instructions"
                            id="instructions"
                            rows="8"
                            value={formData.instructions}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.instructions ? 'border-red-500': 'border-gray-300'}`}
                            placeholder="e.g., 2 large eggs&#10;50g Pecorino cheese&#10;100g panecetta"
                        />
                        {errors.instructions && <p className="mt-1 text-xs text-red-500">{errors.instructions}</p>}
                    </div>

                    {/* submit button */}
                    <div className="pt-4 flex justify-between space-x-4">

                        {/* back to home incase one doens't want to add any recipe again */}
                        <Link
                            to="/"
                            className="w-1/2 px-6 py-3 text-lg font-semibold rounded-lg transition duration-300 bg-gray-200 text-gray-700 hover:bg-gray-300 text-center shadow-md"
                        >
                            Cancel / Back to Home
                        </Link>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full px-6 py-3 text-lg font-semibold rounded-lg transition duration-300
                                ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                                }`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Add Recipe to Platform'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRecipeForm;