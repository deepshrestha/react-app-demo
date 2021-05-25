import React from "react";

const Stories = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">
        <strong>Recent Stories</strong>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{ fontSize: "11px" }}>
          <img src="/src/images/amenda.png" />
          &nbsp;Sunsets are so beautiful that they...
          <div style={{ paddingLeft: "30px" }}>
            <small className="text-muted">Last updated 1 min ago</small>
          </div>
        </li>
        <li className="list-group-item" style={{ fontSize: "11px" }}>
          <img src="/src/images/executive.png" />
          &nbsp;Things are beautiful if you love...
          <div style={{ paddingLeft: "30px" }}>
            <small className="text-muted">Last updated 4 mins ago</small>
          </div>
        </li>
        <li className="list-group-item" style={{ fontSize: "11px" }}>
          <img src="/src/images/smith.png" />
          &nbsp;When you can't find the sunshine...
          <div style={{ paddingLeft: "30px" }}>
            <small className="text-muted">Last updated 11 mins ago</small>
          </div>
        </li>
        <li className="list-group-item" style={{ fontSize: "11px" }}>
          <img src="/src/images/john.png" />
          &nbsp;A great attitude becomes a great...
          <div style={{ paddingLeft: "30px" }}>
            <small className="text-muted">Last updated 21 mins ago</small>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Stories;
