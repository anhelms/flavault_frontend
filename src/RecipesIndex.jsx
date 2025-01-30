import { useState } from "react";
export function RecipesIndex(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div id="recipes-index" className="container text-center">
      <h1>All recipes</h1>
      Search Recipes:{" "}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        list="recipe-titles"
      />
      <datalist id="recipe-titles">
        {props.recipes.map((recipe) => (
          <option key={recipe.id}>{recipe.title}</option>
        ))}
      </datalist>
      <div className="row">
        {props.recipes
          .filter((recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((recipe) => (
            <div key={recipe.id} className="recipes col-lg-4 col-md-6 col-12 my-3">
              <h4>{recipe.title}</h4>
              <img src={recipe.image_url} alt="" />
              <div>Chef: {recipe.chef}</div>
              <button className="btn btn-secondary" onClick={() => props.onShowRecipe(recipe)}>
                More info
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}