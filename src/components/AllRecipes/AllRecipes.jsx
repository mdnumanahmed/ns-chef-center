import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooking from "../Cooking/Cooking";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantCook, setWantCook] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const res = await fetch("recipes.json");
      const data = await res.json();
      setRecipes(data);
    };
    loadRecipes();
  }, []);

  const handleWantCooking = (recipe) => {
    const isExists = wantCook.find((item) => item.id === recipe.id);
    if (!isExists) {
      setWantCook([...wantCook, recipe]);
    }
  };
  return (
    <div className="container mx-auto py-12">
      {/* Recipies Section Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-5 py-6">
        <h2 className="text-5xl font-semibold">Our Recipes</h2>
        <p>
          NS Chef hand-picks the best from the world’s kitchens. Food-lovers
          find uncommonly good taste in all that Sous Chef brings, from
          ingredients and gifts, to tableware and cookware. We&apos;re an
          independent family company and have inspired home cooks and
          professional chefs since 2020.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              handleWantCooking={handleWantCooking}
            />
          ))}
        </div>
        <div className="p-3 border-2 rounded-2xl">
          <Cooking wantCook={wantCook} />
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
