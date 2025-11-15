import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetials from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header>
        <h1>My Recipe Book</h1>
      </header>

      <main>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipe/:recipeId" element={<RecipeDetials />} />

        </Routes>
      </main>

      </div>
    </Router>
  );
}

export default App;