import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Recipe Book</h1>
      </header>

      <main>
        <AddRecipeForm />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;