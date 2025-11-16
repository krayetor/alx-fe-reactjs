import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FavoriteButton from "./components/FavoriteButton";
import RecommendationsList from "./components/RecommendationsList";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header>
        <h1>My Recipe Book</h1>
        {/* add a nav link */}
        <nav style={{ marginTop: '10px'}}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/favorites">My Favorites</Link>
        </nav>
      </header>

      <main>
        <Routes>
          {/* Homepage route */}
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

          {/* detials page route */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />

          {/* add the new Favorite page route */}
          <Route path="/favorites" element={
            <>
              <FavoriteButton />
              <RecommendationsList />
            </>
          }/>

        </Routes>
      </main>

      </div>
    </Router>
  );
}

export default App;