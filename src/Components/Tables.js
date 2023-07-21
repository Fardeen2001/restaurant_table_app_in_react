import React from "react";

const Tables = (props) => {
  // const [table, setTable] = useState();
  return (
    <div className="container tables mt-3 mb-3">
      <h2>{props.title}</h2>
      <ul className="table list-group" id="table">
        {/* <!-- <li className="list-group-item">Biryani-200-table1<button type="button" className="btn btn-secondary btn-sm btndelete float-end">Delete</button></li> --> */}
      </ul>
    </div>
  );
};

export default Tables;
