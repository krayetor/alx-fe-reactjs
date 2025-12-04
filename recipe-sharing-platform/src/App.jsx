import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import recipesData from "./components/RecipeDetail";
import RecipeDetail from "./components/RecipeDetail";


function App() {

  return (
    <Router>
      <Routes>
        {/* route for the homepage */}
        <Route path="/" element={<HomePage />} />

        {/* route for the recipe detail page */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
