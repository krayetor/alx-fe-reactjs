import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
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
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />

        </Routes>
      </main>

      </div>
    </Router>
  );
}

export default App;