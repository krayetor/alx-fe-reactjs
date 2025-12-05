import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";


function App() {

  return (
    <Router>
      <Routes>
        {/* route for the homepage */}
        <Route path="/" element={<HomePage />} />

        {/* route for the recipe detail page */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />

        {/* route for the add recipe form page */}
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
