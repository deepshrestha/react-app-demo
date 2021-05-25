import React from "react";

const Advertisement = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">
        <strong>Adertisement</strong>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <img src="/src/images/adver1.jpg" width="245px" height="90" />
        </li>
        <li className="list-group-item">
          <img src="/src/images/adver2.jpg" width="245px" height="90" />
        </li>
      </ul>
    </div>
  );
};

export default Advertisement;