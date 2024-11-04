import PropTypes from "prop-types";
import { AiOutlineFire } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
const Recipe = ({ recipe }) => {
  const {
    calories,
    ingredients,
    preparing_time,
    recipe_img,
    recipe_name,
    short_description,
  } = recipe;
  return (
    <div className="space-y-2 p-3 border-2 rounded-2xl hover:shadow-md hover:bg-gray-100">
      <img
        className="w-full h-52 object-cover rounded-2xl"
        src={recipe_img}
        alt=""
      />
      <h3 className="text-xl font-semibold">{recipe_name}</h3>
      <p>{short_description}</p>
      <hr className="bg-gray-200 border-2" />
      <div>
        <h4 className="font-medium text-base">Ingredients: 0</h4>
        <ul className="list-disc pl-5">
          {ingredients.map((indg, idx) => (
            <li key={idx}>{indg}</li>
          ))}
        </ul>
      </div>
      <hr className="bg-gray-200 border-2" />
      <div className="flex gap-6">
        <div className="flex gap-2 items-center">
          <CiClock2 />
          {preparing_time} minutes
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlineFire />
          {calories} calories
        </div>
      </div>
      <button className="btn bg-[#6125dd] hover:bg-[#41238c] text-white rounded-full px-5">
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
