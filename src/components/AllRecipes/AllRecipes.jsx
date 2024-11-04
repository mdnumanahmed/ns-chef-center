import Recipe from "../Recipe/Recipe";

const AllRecipes = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Recipies Section Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-5">
        <h2 className="text-5xl font-semibold">Our Recipes</h2>
        <p>
          NS Chef hand-picks the best from the world’s kitchens. Food-lovers
          find uncommonly good taste in all that Sous Chef brings, from
          ingredients and gifts, to tableware and cookware. We&apos;re an
          independent family company and have inspired home cooks and
          professional chefs since 2020.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[66%_33%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Recipe />
        </div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default AllRecipes;
