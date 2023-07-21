import React from "react";

const Inputform = () => {
  return (
    <div className="container">
      <form className="row g-3" id="form">
        <div className="col-md-4">
          <label for="validationDefault01" className="form-label">
            Dish name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            placeholder="dish Name"
            required
          />
        </div>
        <div className="col-md-4">
          <label for="validationDefault02" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault02"
            placeholder="price"
            required
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefault03" className="form-label">
            Table
          </label>
          <select className="form-select" id="validationDefault03" required>
            <option selected disabled value="choose">
              Choose...
            </option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Inputform;
