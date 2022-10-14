import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [recipes, setRecipes] = useState(RecipeData);
  const [formData, setFormData] = useState({ ...initialState });

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([ ...recipes, formData]);
    setFormData({ ...initialState });
  };

  const handleDelete = (idToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== idToDelete)
    );
  };

  return (
    <div className="App">
      <header>
        <h1 style={
          {fontFamily: "Playfair Display SC", 
          textAlign: "center",
          fontSize:"64px"}}>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      <RecipeCreate
        initialState={initialState}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
