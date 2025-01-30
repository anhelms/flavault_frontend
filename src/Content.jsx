import { RecipesIndex } from "./RecipesIndex";

export function Content() {
  const recipes = [
    {id: 1, title: "Raw Eggs", prep_time: 100, servings: 1, description: "2 raw eggs in shell", ingredients: "2 eggs", directions: "Crack open two egg shells", chef: "Anna Helms", image_url: "https://greenlifeinsocal.com/wp-content/uploads/2010/02/bc-bridge-eggs-040-first-two-eggs.jpg"},
    {id: 2, title: "Raw Eggs", prep_time: 100, servings: 1, description: "2 raw eggs in shell", ingredients: "2 eggs", directions: "Crack open two egg shells", chef: "Anna Helms", image_url: "https://greenlifeinsocal.com/wp-content/uploads/2010/02/bc-bridge-eggs-040-first-two-eggs.jpg"}
  ];

  return (
    <div>
      <RecipesIndex recipes={recipes} />
    </div>
  )
}