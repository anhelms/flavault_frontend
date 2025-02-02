import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew"

export function Content() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      setRecipes(response.data);
    });
  };

  const handleCreateRecipe = (params, successCallback) => {
    console.log("handleCreateRecipe", params);
    axios.post("http://localhost:3000/recipes.json", params).then((response) => {
      setRecipes([...recipes,response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <RecipesNew onCreateRecipe={handleCreateRecipe} />
      <RecipesIndex recipes={recipes} />
    </div>
  )
}