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

  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
    </div>
  )
}