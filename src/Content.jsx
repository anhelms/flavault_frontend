import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";

export function Content() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    console.log("handleIndexRecipes");
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  useEffect(handleIndexRecipes, []);
  
  return (
    <div>
      <RecipesIndex recipes={recipes} />
    </div>
  )
}