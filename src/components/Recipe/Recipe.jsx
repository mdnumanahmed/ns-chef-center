import { AiOutlineFire } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
const Recipe = () => {
  return (
    <div className="space-y-2 p-3 border-2">
      <img src="" alt="" />
      <h3 className="text-xl font-semibold">Spaghetti Bolognese</h3>
      <p>Classic Italian pasta dish with savory meat sauce.</p>
      <div>
        <h4 className="font-medium text-base">Ingredients: 0</h4>
        <ul>
          <li>500g ground beef</li>
          <li>500g ground beef</li>
          <li>500g ground beef</li>
        </ul>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2 items-center">
          <CiClock2 />
          30 minutes
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlineFire />
          600 calories
        </div>
      </div>
      <button className="btn">Want to Cook</button>
    </div>
  );
};

export default Recipe;
