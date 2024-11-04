import PropTypes from "prop-types";

const Cooking = ({ wantCook, handlePreparing, cooking }) => {
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
                <tr className="my-3" key={i}>
                  <td>{i + 1}</td>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} minutes</td>
                  <td>{item.calories} calories</td>
                  <td>
                    <button
                      onClick={() => handlePreparing(item)}
                      className="btn btn-sm text-white rounded-full bg-blue-500 hover:bg-blue-700"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cooking Data */}
      <div className="text-center mt-10">
        <h3 className="text-2xl font-semibold py-2">
          Currently cooking: {cooking.length}
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
              </tr>
            </thead>
            <tbody className="">
              {cooking.map((item, i) => (
                <tr className="my-3" key={i}>
                  <td>{i + 1}</td>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} minutes</td>
                  <td>{item.calories} calories</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5 space-y-3 font-bold rounded-xl bg-gray-100 py-3">
            <h3>
              Total Time ={" "}
              {cooking.reduce((prev, curr) => prev + curr.preparing_time, 0)}
            </h3>
            <h3>
              Total Calories ={" "}
              {cooking.reduce((prev, curr) => prev + curr.calories, 0)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  wantCook: PropTypes.array.isRequired,
  cooking: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
};

export default Cooking;
