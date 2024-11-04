import PropTypes from "prop-types";

const Cooking = ({ wantCook }) => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold py-2">
          Want to cook: {wantCook.length}
        </h3>
        <hr />
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {wantCook.map((item, i) => (
                <tr className="my-3" key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} minutes</td>
                  <td>{item.calories} calories</td>
                  <td>
                    <button className="btn btn-sm text-white rounded-full bg-blue-500 hover:bg-blue-700">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div></div>
    </div>
  );
};

Cooking.propTypes = {
  wantCook: PropTypes.array.isRequired,
};

export default Cooking;
